import React from 'react';
import {
  Container, Row, Col, Button, Tabs, Tab,
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-noconflict/ext-language_tools';
import Timer from 'react-compound-timer';
import useInterval from '../../hooks/useInterval.js';
import getOneGame from '../../redux/thunks/getOneGame';
import getChallenge from '../../redux/thunks/getChallenge.js';
import postScore from '../../redux/thunks/postScore.js';
import GameProgress from '../GameProgress';
import Finish from '../Finish';

export default function Game() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const game = useSelector((state) => state.game);
  const challengeIds = useSelector(
    (state) => state.game && state.game.challenges,
  );
  const challenge = useSelector((state) => state.challenge);
  const startParams = useSelector(
    (state) => state.challenge && state.challenge.startParameters,
  );
  const [challengeNumber, setChallengeNumber] = React.useState(0);
  const [code, setCode] = React.useState('\n() => {\n\n}');
  const [userConsole, setUserConsole] = React.useState('');
  const [workerRunning, setWorkerRunning] = React.useState(false);
  const [isTestPassed, setIsTestPassed] = React.useState(false);
  const [isFinalTestPassed, setIsFinalTestPassed] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);
  const [isCheater, setIsCheater] = React.useState(false);

  React.useEffect(() => {
    dispatch(getChallenge(challengeIds[challengeNumber]));
    setCode(`\n(${startParams}) => {\n\n}`);
  }, [challengeNumber]);

  React.useEffect(() => {
    setCode(`\n(${startParams}) => {\n\n}`);
  }, [challenge]);

  useInterval(() => {
    if (game) {
      dispatch(getOneGame(game._id));
    }
  }, 5000);
  let msgBuffer = '';

  function workerMessage(ev) {
    const { data } = ev;
    if (data === 'Closing web worker') setWorkerRunning(false);
    switch (data.type) {
      case 'closing':
        setWorkerRunning(false);
        break;
      case 'resultFinal': {
        setWorkerRunning(false);
        setUserConsole(msgBuffer);
        const result = data.result.every((res) => res === true);
        if (!result) {
          msgBuffer += 'Тесты не пройдены!';
          setIsTestPassed(false);
        } else {
          msgBuffer += 'Тесты пройдены успешно!';
        }
        setUserConsole(msgBuffer);
        if (result) {
          if (challengeNumber === challengeIds.length - 1) {
            dispatch(postScore(game._id));
            setIsFinished(true);
          } else {
            dispatch(postScore(game._id));
            setChallengeNumber(challengeNumber + 1);
            setIsTestPassed(false);
            setIsFinalTestPassed(false);
          }
        }
        break;
      }
      case 'result': {
        setWorkerRunning(false);
        setUserConsole(msgBuffer);
        const result = data.result.every((res) => res === true);
        if (!result) {
          msgBuffer += 'Тесты не пройдены!';
        } else {
          msgBuffer += 'Тесты пройдены успешно!';
        }
        setUserConsole(msgBuffer);
        setIsTestPassed(result);
        break;
      }
      case 'log': {
        msgBuffer += `${data.message.join(' ')}\n`;
        break;
      }
      case 'cheater':
        if (username !== 'JSRacer') {
          setIsCheater(true);
        }
        break;
      default:
        console.log('unknown message type');
    }
  }

  function workerError(err) {
    console.log(err.message);
    msgBuffer += `${err.message}\n`;
    setUserConsole(msgBuffer);
  }

  function runTest(type) {
    try {
      const tests = type === 'test'
        ? [
          {
            in: challenge.tests.sample.in,
            out: challenge.tests.sample.out,
          },
        ]
        : challenge.tests.main;
      setWorkerRunning(true);
      msgBuffer = '';
      setUserConsole('');
      const worker = new Worker('worker.js');
      worker.addEventListener('message', workerMessage);
      worker.addEventListener('error', workerError);
      worker.postMessage({
        do: type === 'test' ? 'run' : 'runFinal',
        code,
        tests,
      });
      worker.postMessage({ type: 'die' });
      setUserConsole(msgBuffer);
      setTimeout(async () => {
        await worker.terminate();
        setUserConsole(msgBuffer);
        if (workerRunning) msgBuffer += 'Превышено максимальное время выполнения';
        await setWorkerRunning(false);
      }, 1000);
    } catch (err) {
      msgBuffer += `${err.message}\n`;
      setUserConsole(msgBuffer);
    }
  }

  if (isCheater && username !== 'JSRacer') {
    return (
      <img
        src="https://i.ytimg.com/vi/rWFPw8Lt1bk/hqdefault.jpg"
        height="800px"
        width="1000px"
      />
    );
  }

  if (!challenge) return <h1 className="text-dark">Загрузка</h1>;

  if (isFinished) return <Redirect to={`/finish/${game._id}`} />;

  return (
    <Container fluid>
      <Row>
        <Col xs="4">
          <h2 className="mt-3 text-light">{challenge.name}</h2>
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
            <Tab eventKey="description" title="Описание задачи">
              <div className="my-1 text-light">{challenge.description}</div>
            </Tab>
            <Tab eventKey="sample" title="Примеры">
              <div className="my-1 text-light">
                {`Пример исходных данных: ${challenge.sampleInput}`}
              </div>
              <div className="text-light">
                {`Пример результата: ${challenge.sampleOutput}`}
              </div>
            </Tab>
          </Tabs>
          <br />
        </Col>
        <Col>
          <Row>
            <h2 className="mt-3 text-light">До конца игры:</h2>
          </Row>
          <Row className="text-light">
            <Timer
              initialTime={
                new Date(
                  new Date(game.startDate).getTime() + 60 * 30 * 1000,
                ).getTime() - Date.now()
              }
              direction="backward"
            >
              <Timer.Minutes />
              {' '}
              Минут
              {' '}
              <Timer.Seconds />
              {' '}
              Секунд
            </Timer>
          </Row>
        </Col>
        <Col xs="5" className="mx-5 mt-3 float-right">
          <h2 className="mt-3 text-light">Таблица лидеров:</h2>
          {game
            && game.players.map((player, i) => (
              <GameProgress
                className="text-light"
                bgcolor={i}
                completed={player.challengeTimes.length}
                username={player.player.username}
              />
            ))}
        </Col>
      </Row>
      <Row className="my-3 text-light">
        <Col>
          <h3>Ваше решение:</h3>
          <AceEditor
            className="text-light"
            mode="javascript"
            theme="tomorrow_night_eighties"
            onChange={(e) => {
              setCode(e);
            }}
            name="EDITOR_ID"
            value={code}
            height="300px"
            width="800px"
            setOptions={{
              fontSize: 16,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              tabSize: 2,
            }}
          />
          <Button
            disabled={workerRunning}
            onClick={() => {
              runTest('test');
            }}
            className="mt-3"
          >
            Тест
          </Button>
          {isTestPassed && (
            <Button
              variant="success"
              className="mt-3 mx-2 text-light"
              onClick={() => {
                runTest('main');
              }}
            >
              Отправить решение
            </Button>
          )}
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h3 className="text-light">Консоль:</h3>
          <AceEditor
            theme="tomorrow_night_eighties"
            name="CONSOLE"
            value={userConsole}
            height="300px"
            width="800px"
            setOptions={{
              fontSize: 16,
              highlightActiveLine: false,
              showGutter: false,
              showPrintMargin: false,
              readOnly: true,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

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
import getChallenge from '../../redux/thunks/getChallenge.js';
import postScore from '../../redux/thunks/postScore.js';

export default function Game() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const challengeIds = useSelector((state) => state.game && state.game.challenges);
  const challenge = useSelector((state) => state.challenge);
  const startParams = useSelector((state) => state.challenge && state.challenge.startParameters);
  const [challengeNumber, setChallengeNumber] = React.useState(0);
  const [code, setCode] = React.useState('\n() => {\n\n}');
  const [userConsole, setUserConsole] = React.useState('');
  const [workerRunning, setWorkerRunning] = React.useState(false);
  const [isTestPassed, setIsTestPassed] = React.useState(false);
  const [isFinalTestPassed, setIsFinalTestPassed] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);

  React.useEffect(() => {
    dispatch(getChallenge(challengeIds[challengeNumber]));
    setCode(`\n(${startParams}) => {\n\n}`);
  }, [challengeNumber]);

  React.useEffect(() => {
    setCode(`\n(${startParams}) => {\n\n}`);
  }, [challenge]);

  let msgBuffer = '';

  function workerMessage(ev) {
    const { data } = ev;
    if (data === 'Closing web worker') setWorkerRunning(false);
    switch (data.type) {
      case 'closing':
        setWorkerRunning(false);
        break;
      case 'resultFinal':
      {
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
          if (challengeNumber === (challengeIds.length - 1)) {
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
      case 'result':
      {
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
      case 'log':
      {
        msgBuffer += `${data.message.join(' ')}\n`;
        break;
      }
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
        ? [{
          in: challenge.tests.sample.in,
          out: challenge.tests.sample.out,
        }] : challenge.tests.main;
      setWorkerRunning(true);
      msgBuffer = '';
      setUserConsole('');
      const worker = new Worker('worker.js');
      worker.addEventListener('message', workerMessage);
      worker.addEventListener('error', workerError);
      worker.postMessage({ do: type === 'test' ? 'run' : 'runFinal', code, tests });
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

  if (!challenge) return <h1>Загрузка</h1>;

  if (isFinished) return <h1>Done</h1>;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-3">{challenge.name}</h2>
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
            <Tab eventKey="description" title="Описание задачи">
              <div className="my-1">{challenge.description}</div>
            </Tab>
            <Tab eventKey="sample" title="Примеры">
              <div className="my-1">
                {`Пример исходных данных: ${challenge.sampleInput}`}
              </div>
              <div>
                {`Пример результата: ${challenge.sampleOutput}`}
              </div>
            </Tab>
          </Tabs>
          <br />
        </Col>
        <Col>
          <Row>
            <h2 className="mt-3">До конца игры:</h2>
          </Row>
          <Row>
            <Timer
              initialTime={new Date(new Date(game.startDate).getTime() + 60 * 30 * 1000).getTime() - Date.now()}
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
        {/* <Col>
          {lapsTime.map((time) => <div>{time.toString()}</div>)}
        </Col> */}
      </Row>
      <Row className="my-3">
        <Col>
          <h3>Ваше решение:</h3>
          <AceEditor
            mode="javascript"
            theme="tomorrow_night_eighties"
            onChange={(e) => { setCode(e); }}
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
          <Button disabled={workerRunning} onClick={() => { runTest('test'); }} className="mt-3">Тест</Button>
          {isTestPassed && <Button variant="success" className="mt-3 mx-2" onClick={() => { runTest('main'); }}>Отправить решение</Button>}
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h3>Консоль:</h3>
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

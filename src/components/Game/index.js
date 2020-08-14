import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-noconflict/ext-language_tools';

function Game() {
  const dispatch = useDispatch();
  const [code, setCode] = React.useState('() => {\n\n}');
  const [userConsole, setUserConsole] = React.useState('');
  const [workerRunning, setWorkerRunning] = React.useState(false);
  const [isTestPassed, setIsTestPassed] = React.useState(false);
  const [tests, setTests] = React.useState([{
    params: [[1, 2, 3, 4, 5]],
    equals: [2, 4, 6, 8, 10],
  },
  ]);

  let msgBuffer = '';

  function workerMessaged(ev) {
    const { data } = ev;
    if (data === 'Closing web worker') setWorkerRunning(false);
    console.log(data);
    switch (data.type) {
      case 'result':
      {
        setWorkerRunning(false);
        setUserConsole(msgBuffer);
        setIsTestPassed(data.result.every((res) => res === true));
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

  function runTest() {
    try {
      setWorkerRunning(true);
      msgBuffer = '';
      setUserConsole('');
      const worker = new Worker('worker.js');
      worker.addEventListener('message', workerMessaged);
      worker.addEventListener('error', workerError);
      // const foo = eval(code);

      worker.postMessage({ do: 'run', code, tests });
      setTimeout(() => {
        worker.terminate();
        console.log('Worker terminated');
        setWorkerRunning(false);
      }, 1000);
      worker.postMessage({ do: 'die' });
    } catch (err) {
      msgBuffer += `${err.message}\n`;
      setUserConsole(msgBuffer);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Ваше решение:</h3>
          <AceEditor
            mode="javascript"
            theme="tomorrow_night_eighties"
            onChange={(e) => { setCode(e); }}
            name="EDITOR_ID"
            value={code}
            setOptions={{
              fontSize: 16,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              tabSize: 2,
            }}
          />
          <Button disabled={workerRunning} onClick={runTest} className="mt-3">Тест</Button>
          {isTestPassed ? <Button variant="success" className="mt-3 mx-2">Отправить решение</Button> : <></>}
        </Col>
        <Col>
          <h3>Консоль:</h3>
          <AceEditor
            theme="tomorrow_night_eighties"
            name="CONSOLE"
            value={userConsole}
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
      <Row>
        <Col>
          <h2 className="mt-3">Описание задачи:</h2>
          <div>Необходимо вывести массив элементов исходного массива arr, умноженных на два.</div>
          <div>Пример исходного массива: [1,2,3,4,5]</div>
          <div>Пример результата: [2,4,6,8,10]</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Game;

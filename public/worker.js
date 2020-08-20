importScripts('lodash.min.js');

const arrayToString = (array) => ` ${array.join(' \t')}`;

const myConsole = {
  arrayToString: (array) => ` ${array.join(' \t')}`,
  log() { self.postMessage({ type: 'log', message: [...arguments] }); },
  table: (objectArray) => {
    const line = '--------------------------\n';
    let list = [Object.keys(objectArray[0])].concat(objectArray.map((o) => Object.values(o)));
    list = list.map((list) => arrayToString(list));
    self.postMessage({ type: 'log', message: `${line + list.join(`\n${line}`)}\n${line}` });
  },
};

self.addEventListener('message', (ev) => {
  const { data } = ev;
  switch (data.do) {
    case 'run': {
      console.log('TEST RUN');
      if (data.code.match(/self.postMessage/g)) {
        self.postMessage({ type: 'cheater' });
        break;
      }
      const code = data.code.replace(/console/g, 'myConsole');
      const foo = eval(code);
      const result = data.tests.map((test) => _.isEqual(foo(...test.in), test.out));
      self.postMessage({ type: 'result', result });
      break;
    }
    case 'runFinal': {
      const code = data.code.replace(/console/g, 'myConsole');
      const foo = eval(code);
      const result = data.tests.map((test) => {
        console.log('FINAL TEST RUN');
        console.log('input', test.in);
        console.log('output', foo(...test.in));
        return _.isEqual(foo(...test.in), test.out);
      });
      self.postMessage({ type: 'resultFinal', result });
      break;
    }
    case 'die':
      self.postMessage({ type: 'closing' });
      self.close();
      break;
    default:
      break;
  }
});

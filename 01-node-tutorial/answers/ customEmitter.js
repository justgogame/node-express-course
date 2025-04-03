const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, state, id) => {
  console.log(`Data recieved: ${name} from ${state}, id ${id}`);
});

customEmitter.emit('response', 'John', 'NC', 34);

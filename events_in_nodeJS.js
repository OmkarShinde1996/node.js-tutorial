const EventEmitter = require('events')
const customEvent = new EventEmitter()


customEvent.on('response', (name, id) => {
    console.log(`data received with name as ${name} and id as ${id}`);
})

customEvent.on('response', () => {
    console.log(`data received for other event also`);
})

customEvent.emit('response', 'omkar', 21)


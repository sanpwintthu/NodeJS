// Events and eventEmitter
var events = require('events');

var eventEmitter = new events.EventEmitter();

// eventEmitter.on('myCustomEvent', function() {
// 	console.log('Event Fired');
// });

// setTimeout(function(){
// 	eventEmitter.emit('myCustomEvent');
// }, 2000)


eventEmitter.on('myCustomEvent', function(arg1, arg2) {
	console.log(arg1 + arg2);
});

setTimeout(function(){
	eventEmitter.emit('myCustomEvent', 'String 1 ', 'and String 2');
}, 2000)
// document.querySelector('yourTag').onclick = function(){.....};
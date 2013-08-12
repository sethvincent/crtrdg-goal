var Game = require('crtrdg-gameloop');
var Mouse = require('crtrdg-mouse');
var goals = require('./index')(game);

var game = new Game({
  canvasId: 'game',
  width: '800',
  height: '400',
  backgroundColor: '#ff1f1f',
});

var mouse = new Mouse(game);

mouse.on('click', function(location){

});

var
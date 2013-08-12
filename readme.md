# crtrdg-goal
> achievements module for games

## Goals for crtrdg-goal:
- Quick and dirty little achievements system for crtrdg games.


## Requirements
- node.js
- browserify / beefy
- crtrdg-gameloop (or possibly another method of animating the canvas with requestAnimationFrame that emits `update` and `draw` events)

## Getting started
Install node if you haven't already.

### Install browserify and beefy:
```
npm install -g browserify beefy
```

### install crtrdg modules
```
npm install --save crtrdg-gameloop crtrdg-goal crtrdg-mouse
```
`crtrdg-mouse` is an optional module. You caould probably also use something other than `crtrdg-gameloop`, you would just need a different game object in its place.

## Usage:
### Create an index.html file:
```
<!DOCTYPE html>
<html>
<head>
  <title>crtrdg goal test</title>
</head>
<body>

<canvas id="game"></canvas>

<script src="./bundle.js"></script>
</body>
</html>
```

### Create a game.js file:
```
var Game = require('crtrdg-gameloop');
var Mouse = require('crtrdg-mouse');
var goals = require('crtrdg-goal')(game);

var game = new Game({
  canvasId: 'game',
  width: '800',
  height: '400',
  backgroundColor: '#ff1f1f',
});

var mouse = new Mouse(game);

mouse.on('click', function(location){
  goals.met(goalOne);
});

goalOne = goals.create({
  name: 'first goal'
});

console.log(goals)

goalOne.on('active', function(goal){
  console.log(goal.name + ' is active');
});

goalOne.on('met', function(goal){
  console.log(goal.name + ' is met!');
});

goals.set(goalOne);
```

## Purpose of `crtrdg`:
Almost every javascript game / animation library I've found bundles things like requestAnimationFrame polyfill, gameloop, entities, abstract drawing methods, keyboard/mouse input, vector math, and more into one entangled library. If I don't like how the library handles just one of those components, I'm stuck with dead library weight, and sometimes it's difficult to replace a library's methods.

So what if each element of 2d games were broken up into it's own modules / repositories?

With inspiration from voxel.js, crtrdg is a collection of javascript modules used for developing 2d games.

As I learned more about node.js, the core events module, and browserify, I realized the ideal api for making simple 2d games could be based on node's events module. So you'll see a lot of crtrdg modules exposing an api that includes `.on('some event', function(){})`, which seems to make a lot of sense for games.

## Other `crtrdg` modules:
- [crtrdg-gameloop](http://github.com/sethvincent/crtrdg-gameloop)
- [crtrdg-entity](http://github.com/sethvincent/crtrdg-entity)
- [crtrdg-keyboard](http://github.com/sethvincent/crtrdg-keyboard)
- [crtrdg-mouse](http://github.com/sethvincent/crtrdg-mouse)
- [crtrdg-scene](http://github.com/sethvincent/crtrdg-mouse)

## Contributing
- Fork this repository.
- Create a branch for you changes.
- Include tests if applicable.
- Add/edit documentation for any changes.
- Submit a pull request.

## License
MIT
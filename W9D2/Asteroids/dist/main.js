/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.COLOR = \"white\";\nAsteroid.RADIUS = 30;\n\nfunction Asteroid(object) {\n  \n  MovingObject.call(this, {\n    pos: object[\"pos\"], \n    vel: Util.randomVec(5), \n    color: Asteroid.COLOR, \n    radius: Asteroid.RADIUS,\n    game: object[\"game\"]\n  });\n}\n\n// Asteroid.prototype = Object.create(MovingObject.prototype);\n// Asteroid.prototype.contructor = Asteroid;\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object\");\n// const Util = require(\"./utils\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 800;\nGame.NUM_ASTEROIDS = 4;\n\nfunction Game(ctx) {\n\n  this.asteroids = [];\n  this.ctx = ctx;\n  this.ship = new Ship({pos: [Game.DIM_X / 2, Game.DIM_Y / 2]});\n  this.allObjects = [];\n  this.addAsteroids();\n  \n}\n\nGame.prototype.allObjects = function() {\n  \n};\n\nGame.prototype.addAsteroids = function() {\n  \n  let i = 0;\n  while (i < Game.NUM_ASTEROIDS) {\n    let pos = this.randomPosition();\n    let asteroid = new Asteroid({pos: pos, game: this});\n    this.asteroids.push(asteroid);\n    i++;\n  }\n  this.draw();\n};\n\nGame.prototype.randomPosition = function() {\n  let randX = Math.floor(Math.random() * Game.DIM_X);\n  let randY = Math.floor(Math.random() * Game.DIM_Y);\n  return [randX, randY];\n};\n\nGame.prototype.draw = function() {\n  this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(this.ctx);\n  }\n};\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n};\n\nGame.prototype.wrap = function(pos) {\n  pos[0] = pos[0] % Game.DIM_X;\n  pos[1] = pos[1] % Game.DIM_Y;\n\n  return pos;\n};\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.asteroids.length - 1; i++) {\n    for (let j = i + 1; j < this.asteroids.length; j++) {\n      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n        alert(\"COLLISION\");\n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function (asteroid) {\n  \n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object\");\n// const Util = require(\"./utils\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game(ctx);\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  setInterval(function() {\n    that.game.draw(that.ctx);\n    that.game.moveObjects();\n  }, 20);\n  this.game.step();\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object\");\n// const Util = require(\"./utils\");\n// const Asteroid = require(\"./asteroid\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nlet canvasWidth = 1000;\nlet canvasHeight = 800;\n\ndocument.addEventListener('DOMContentLoaded', SetupCanvas);\n\nfunction SetupCanvas() {\n  let canvas = document.getElementById('game-canvas');\n  let ctx = canvas.getContext('2d');\n  canvas.width = canvasWidth;\n  canvas.height = canvasHeight;\n  canvas.style.background = \"grey\";\n  let newGame = new GameView(ctx);\n  // debugger\n  newGame.start();\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(object) {\n    this.pos = object[\"pos\"];\n    this.vel = object[\"vel\"];\n    this.radius = object[\"radius\"];\n    this.color = object[\"color\"];\n    this.game = object[\"game\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  \n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.stroke();\n  ctx.closePath();\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(ohterObject) {\n  let sumradii = this.radius + ohterObject.radius;\n  let disX = this.pos[0] - ohterObject.pos[0];\n  let disY = this.pos[1] - ohterObject.pos[1];\n  let dist = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));\n  return dist < sumradii ? true : false;\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nShip.RADIUS = 10;\nShip.COLOR = \"green\";\n\nfunction Ship(object) {\n  MovingObject.call(this, {\n    pos: object[\"pos\"],\n    vel: [0, 0],\n    color: Ship.COLOR,\n    radius: Ship.RADIUS,\n    game: object[\"game\"]\n  });\n}\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const MovingObject = require(\"./moving_object\");\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate;\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
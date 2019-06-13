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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/free_run.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/root_model.js":
/*!**************************************!*\
  !*** ./src/components/root_model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass RootModel{\n    constructor(){\n\n    }\n\n    centerX() {\n        return this.pos_y + this.width * 0.5;\n    }\n\n    centerY() {\n        return this.pos_y+ this.height * 0.5;\n    }\n\n    top() {\n        return this.pos_y;\n    }\n\n    old_top(){\n        return this.old_pos_y;\n    }\n\n    bottom() {\n        return this.pos_y + this.height;\n    }\n\n    old_bottom(){\n        return this.old_pos_y + this.height;\n    }\n\n    left() {\n        return this.pos_x;\n    }\n\n    old_left(){\n        return this.old_pos_x;\n    }\n\n\n    right() {\n        return this.pos_x + this.width;\n    }\n\n    old_right(){\n        return this.old_pos_x + this.width;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RootModel);\n\n//# sourceURL=webpack:///./src/components/root_model.js?");

/***/ }),

/***/ "./src/components/user_model.js":
/*!**************************************!*\
  !*** ./src/components/user_model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root_model */ \"./src/components/root_model.js\");\n\n\n\n\nclass UserModel extends _root_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(pos_x, pos_y) {\n        super();\n        this.pos_x = pos_x;\n        this.pos_y = pos_y;\n        this.old_pos_x = pos_x;\n        this.old_pos_y = pos_y;\n        \n        this.width = 16;\n        this.height = 16;\n        this.delta_x = 0;\n        this.delta_y = 0;\n\n        this.jumping = true;\n        this.doubleJumping = true;\n        this.type = null;\n\n        this.moveLeft = this.moveLeft.bind(this);\n        this.moveRight = this.moveRight.bind(this);\n        this.jump = this.jump.bind(this);\n        this.doubleJump = this.doubleJump.bind(this);\n        this.handleCollisionWithWorld = this.handleCollisionWithWorld.bind(this);\n\n\n        this.prev_direction = 'RIGHT';\n        this.x_frames = 0;\n\n        \n        this.frame_sets = {\n            \"idle-left\" : [{ sx: 7, sy: 10, width: 20, height: 20 }],\n            \"jump-left\":  [{ sx: 328, sy: 2, width: 15, height: 20 }],\n            \"move-left\" : [\n                { sx: 37, sy: 10, width: 20, height: 20 },\n                { sx: 70, sy: 12, width: 20, height: 18 }\n            ],\n            \"idle-right\": [{ sx: 932, sy: 10, width: 20, height: 20 }],\n            \"jump-right\": [{ sx: 709, sy: 2, width: 15, height: 20 }],\n            \"move-right\": [\n                { sx: 901, sy: 10, width: 20, height: 20 },\n                { sx: 869, sy: 12, width: 20, height: 18 }\n            ],\n        }\n        \n    }\n\n    moveLeft(){\n        this.delta_x = 0;\n        this.pos_x -= 4;\n    }\n\n    moveRight(){\n        this.delta_x = 0;\n        this.pos_x += 4;\n    }\n\n    jump(){\n        if(!this.jumping){\n            this.jumping = true;\n            if (this.type === 'slide-right'){\n                this.delta_y = -4;\n                this.delta_x = 4;\n                this.type = null;\n            } else if ( this.type === 'slide-left'){\n                this.delta_y = -4;\n                this.delta_x = -4;\n                this.type = null;\n            }\n            else\n                this.delta_y = -8;\n        }\n    }\n\n    doubleJump(){\n        if(this.jumping && !this.doubleJumping){\n            this.doubleJumping = true;\n            this.delta_y = -8;\n        }\n    }\n\n    handleCollisionWithWorld(type, world){\n        switch(type){\n            //Hitting the bound of the world\n            case '1':\n                this.pos_x = 0;\n                this.delta_x = 0;\n    \n                if ((this.pos_y + this.height) < world.height)\n                    this.delta_y = 0.1;\n                else{\n                    this.pos_y = world.height - this.height;\n                    this.delta_y = 0;\n                }\n                break;\n\n            case '2':\n                this.pos_x = world.width - this.width;\n                this.delta_x = 0; \n                this.delta_y = 0.1;\n\n\n                if ((this.pos_y + this.height) < world.height)\n                    this.delta_y = 0.1;\n                else{\n                    this.pos_y = world.height - this.height;\n                    this.delta_y = 0;\n                }\n    \n                break;\n\n            case '3':\n                this.jumping = false;\n                this.doubleJumping = false;\n                this.pos_y = world.height - this.height;\n                this.delta_y = 0;\n                break;\n            case '4': // Hit your head\n                this.delta_y = 0;\n                this.pos_y = 0;\n            default:\n                break;\n        }\n    }\n\n    update(){\n        this.old_pos_x = this.pos_x;\n        this.old_pos_y = this.pos_y;\n        this.pos_x += this.delta_x;\n        this.pos_y += this.delta_y;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);\n\n//# sourceURL=webpack:///./src/components/user_model.js?");

/***/ }),

/***/ "./src/free_run.js":
/*!*************************!*\
  !*** ./src/free_run.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/display */ \"./src/ui/display.js\");\n/* harmony import */ var _ui_world__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/world */ \"./src/ui/world.js\");\n/* harmony import */ var _ui_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/engine */ \"./src/ui/engine.js\");\n/* harmony import */ var _ui_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/controller */ \"./src/ui/controller.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    const display = new _ui_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const world = new _ui_world__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    const player = world.player;\n    const controller = new _ui_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n    const render = () => {\n        display.clearCanvas();\n        display.drawBackground();\n        display.drawClouds();\n        display.drawMap(world.map, world.columns);\n        display.drawPlayer(player.pos_x, player.pos_y, player.delta_x, player.delta_y, player.prev_direction, player.frame_sets);\n    }\n\n    const update = () => {\n        if (controller.leftPress){\n            player.moveLeft();\n        }\n        if (controller.rightPress)\n            player.moveRight();\n       \n        if (controller.jumpPress)\n            player.jump();\n\n        if (controller.doublejumpPress)\n            player.doubleJump();\n\n        world.update();\n    }\n\n    window.addEventListener('keydown', controller.handleKeyPress)\n    window.addEventListener('keyup', controller.handleKeyPress)\n\n    display.tile_sheet.image.src='./assets/images/SimpleTileset2.png';\n    display.playerSpriteForward.image.src='./assets/images/Mushroom.png';\n    display.playerSpriteBackward.image.src='./assets/images/Mushroom_reverse.png';\n    display.cloudSprite.image.src='./assets/images/background2.png';\n    display.background.image.src = './assets/images/background3.png';\n   \n    const engine = new _ui_engine__WEBPACK_IMPORTED_MODULE_2__[\"default\"](update, render)\n    setTimeout(() => engine.run(), 500);\n});\n\n//# sourceURL=webpack:///./src/free_run.js?");

/***/ }),

/***/ "./src/resources/map-1.json":
/*!**********************************!*\
  !*** ./src/resources/map-1.json ***!
  \**********************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":38,\"infinite\":false,\"layers\":[{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,30,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,0,0,0,0,0,42,0,0,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,0,0,0,0,57,58,59,57,58,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,32,0,0,0,0,0,0,0,0,73,74,75,73,74,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,64,0,89,90,64,64,90,91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,49,49,49,49,49,49,49,49,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,65,65,65,65,65,65,65,65,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,65,65,65,65,65,65,65,65,65,0,0,42,0,0,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,65,65,65,65,65,65,65,65,65,0,57,58,59,57,58,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,65,65,65,65,65,65,65,65,65,0,73,74,75,73,74,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,65,65,65,65,65,65,65,65,65,0,89,90,91,89,90,91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],\"height\":38,\"id\":1,\"name\":\"Tile Layer 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":76,\"x\":0,\"y\":0}],\"nextlayerid\":2,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.4\",\"tileheight\":16,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../../../Downloads/SimpleTileset2_resized.tsx\"}],\"tilewidth\":16,\"type\":\"map\",\"version\":1.2,\"width\":76};\n\n//# sourceURL=webpack:///./src/resources/map-1.json?");

/***/ }),

/***/ "./src/resources/map1_collide.json":
/*!*****************************************!*\
  !*** ./src/resources/map1_collide.json ***!
  \*****************************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":38,\"infinite\":false,\"layers\":[{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,30,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,30,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,1,1,1,1,1,1,1,1,1,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\"height\":38,\"id\":1,\"name\":\"Tile Layer 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":76,\"x\":0,\"y\":0}],\"nextlayerid\":2,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.4\",\"tileheight\":16,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../../../Downloads/SimpleTileset2_resized.tsx\"}],\"tilewidth\":16,\"type\":\"map\",\"version\":1.2,\"width\":76};\n\n//# sourceURL=webpack:///./src/resources/map1_collide.json?");

/***/ }),

/***/ "./src/ui/animate.js":
/*!***************************!*\
  !*** ./src/ui/animate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Animate{\n    constructor(entity){\n        this.entity = entity;\n        this.prev_direction = null;\n        this.frame_index = 0;\n        this.frames_sets = [\n            \n        ]\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animate);\n\n//# sourceURL=webpack:///./src/ui/animate.js?");

/***/ }),

/***/ "./src/ui/controller.js":
/*!******************************!*\
  !*** ./src/ui/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Controller {\n    constructor(){\n        this.leftPress = false;\n        this.rightPress = false;\n        this.jumpPress = false;\n        this.doublejumpPress = false;\n\n        this.handleKeyPress = this.handleKeyPress.bind(this);\n    }\n\n\n    handleKeyPress(e){\n        if (e.key === 'ArrowLeft' || e.keyCode === '37')\n            this.leftPress = e.type === 'keydown' ? true : false;\n        else if (e.key === 'ArrowRight' || e.key_code === '39')\n            this.rightPress = e.type === 'keydown' ? true : false;\n        else if (e.key === 'a' || e.keyCode === '65')\n            this.doublejumpPress = e.type === 'keydown' ? true : false;\n        else if (e.key === \" \" || e.keyCode === '32')\n            this.jumpPress = e.type === 'keydown' ? true : false;\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/ui/controller.js?");

/***/ }),

/***/ "./src/ui/display.js":
/*!***************************!*\
  !*** ./src/ui/display.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tilesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tilesheet */ \"./src/ui/tilesheet.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/ui/animate.js\");\n\n\n\n\nclass Display {\n    constructor(){\n        this.overlapCanvas = document.createElement(\"canvas\").getContext('2d')\n        this.canvas = document.getElementById('myCanvas');\n        this.ctx = this.canvas.getContext('2d');\n        \n        this.tile_sheet = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](16, 16);\n        this.playerSpriteForward = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](32, 30);\n        this.playerSpriteBackward = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](32, 30);\n        this.background = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\n        this.cloudSprite = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\n        this.cloud_pos_x = 0;\n\n    \n\n        this.drawMap = this.drawMap.bind(this);\n        this.drawPlayer = this.drawPlayer.bind(this);\n\n\n    }\n\n    drawMap(map, columns){\n        for (let index = map.length - 1; index > -1; --index){\n\n            let value = map[index] - 1;\n\n            let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;\n            let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;\n            let destination_x = (index % columns) * this.tile_sheet.tile_size;\n            let destination_y = Math.floor(index / columns) * this.tile_sheet.tile_size;\n\n            this.ctx.drawImage(this.tile_sheet.image, \n                    source_x, source_y, this.tile_sheet.tile_size, \n                    this.tile_sheet.tile_size, destination_x, destination_y,\n                    this.tile_sheet.tile_size, this.tile_sheet.tile_size);\n\n \n        }\n    }\n    \n    drawPlayer(pos_x, pos_y, delta_x, delta_y, direction, frames){\n        let frameSet;\n\n\n        if (delta_x > 0 && !delta_y ){\n            this.ctx.drawImage(this.playerSprite.image, 7, 10, 20, 20, \n                            Math.round(pos_x), Math.round(pos_y), 16, 16);\n        } else {\n            return\n        }\n        \n    }\n\n    drawClouds(){\n        //debugger\n        this.ctx.drawImage(this.cloudSprite.image, 0 - this.cloud_pos_x, 0, this.canvas.width, this.canvas.height);\n\n        this.ctx.drawImage(this.cloudSprite.image, this.canvas.width-this.cloud_pos_x, 0, this.canvas.width, this.canvas.height);\n\n\n\n        this.cloud_pos_x += 1;\n\n        if (this.cloud_pos_x === this.canvas.width)\n            this.cloud_pos_x = 0;\n    }\n\n    clearCanvas(){\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n    }\n\n    drawBackground(){\n        this.ctx.drawImage(this.background.image, 0, 0, this.canvas.width, this.canvas.height);\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\n//# sourceURL=webpack:///./src/ui/display.js?");

/***/ }),

/***/ "./src/ui/engine.js":
/*!**************************!*\
  !*** ./src/ui/engine.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Engine {\n    constructor(update, render) {\n        this.accumulated_time = 0;\n        this.time = window.performance.now();\n\n        this.FPS = 1000 / 60;\n        this.update = update;\n        this.render = render;\n        this.updated = false;\n        this.RAF = null;\n        this.run = this.run.bind(this);\n        this.timeout = null;\n        this.stop = false;  \n    }\n\n    run() {\n        if (!this.stop){\n            this.update();\n            this.render();\n            this.RAF = window.requestAnimationFrame(this.run);\n        }\n    }\n\n    stop(){\n        this.stop = true;\n    }\n\n    resume(){\n        this.stop = false;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Engine);\n\n//# sourceURL=webpack:///./src/ui/engine.js?");

/***/ }),

/***/ "./src/ui/tilesheet.js":
/*!*****************************!*\
  !*** ./src/ui/tilesheet.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass TileSheet{\n    constructor( tile_size, columns){\n        this.image = new Image();\n        this.tile_size = tile_size;\n        this.columns = columns;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TileSheet);\n\n//# sourceURL=webpack:///./src/ui/tilesheet.js?");

/***/ }),

/***/ "./src/ui/world.js":
/*!*************************!*\
  !*** ./src/ui/world.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/user_model */ \"./src/components/user_model.js\");\n/* harmony import */ var _resources_map_1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/map-1.json */ \"./src/resources/map-1.json\");\nvar _resources_map_1_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/map-1.json */ \"./src/resources/map-1.json\", 1);\n/* harmony import */ var _resources_map1_collide_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/map1_collide.json */ \"./src/resources/map1_collide.json\");\nvar _resources_map1_collide_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/map1_collide.json */ \"./src/resources/map1_collide.json\", 1);\n\n\n\n\n\nclass World {\n    constructor(){\n        this.gravity = 0.5;\n        this.friction = 0.6;\n        this.player = new _components_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 130);\n        this.collision = this.collision.bind(this);\n        this.update = this.update.bind(this);\n        \n        this.tile_size = 16; //represets 16 pixel\n        this.columns = 76; //This has to match evenly to the canvas width\n        this.rows = 38; //match to canvas height\n\n\n        this.height = this.tile_size * this.rows;\n        this.width = this.tile_size * this.columns;\n\n        this.map = _resources_map_1_json__WEBPACK_IMPORTED_MODULE_1__[\"layers\"][0].data;\n        this.collisionMap = _resources_map1_collide_json__WEBPACK_IMPORTED_MODULE_2__[\"layers\"][0].data;\n\n\n        this.collision = this.collision.bind(this);\n        this.isCollide = this.isCollide.bind(this);\n        this.map_collision = this.map_collision.bind(this);\n    }\n\n    //Could be player or maybe even moving platforms\n    collision(object){\n        if (object.pos_x < 0) \n           object.handleCollisionWithWorld('1', this);\n        else if (object.pos_x + object.width  > this.width)\n           object.handleCollisionWithWorld('2', this);\n        \n        //This will be modified so if the user falls out of bound, he/she resets\n        if (object.pos_y + object.height > this.height)\n            object.handleCollisionWithWorld('3', this);\n        else if (object.pos_y < 0) \n            object.handleCollisionWithWorld('4', this);\n        \n    }\n\n\n    //I like snake casing, deal with it.\n    map_collision(object){  \n        let bottom, top, left, right, value;\n\n        top = Math.floor(object.top() / this.tile_size);\n        left = Math.floor(object.left() / this.tile_size);\n        value = this.collisionMap[top * this.columns + left]\n        this.isCollide(value, object, left * this.tile_size, top * this.tile_size);\n       \n\n        top = Math.floor(object.top() / this.tile_size);\n        right = Math.floor(object.right() / this.tile_size);\n        value = this.collisionMap[top * this.columns + right];\n        this.isCollide(value, object, right * this.tile_size, top * this.tile_size);\n        \n    \n\n        bottom = Math.floor(object.bottom() / this.tile_size);\n        left = Math.floor(object.left() / this.tile_size);\n        value = this.collisionMap[top * this.columns + left];\n        this.isCollide(value, object, left * this.tile_size, bottom * this.tile_size);\n\n       \n\n        bottom = Math.floor(object.bottom() / this.tile_size);\n        right = Math.floor(object.right() / this.tile_size);\n        value = this.collisionMap[top * this.columns + right];\n        this.isCollide(value, object, right * this.tile_size, bottom * this.tile_size);\n\n    }   \n\n\n    isCollide(value, object, tile_x, tile_y){\n        switch(value){\n            case 32:\n            \n                this.collideRight(object, tile_x + this.tile_size, 'SLIDE');\n                return;\n            case 30:\n                this.collideLeft(object, tile_x, 'SLIDE');\n                return;\n        \n            case 81:\n                if (this.collideBottom(object, tile_y + this.tile_size)) return;\n                this.collideLeft(object, tile_x);\n                return\n            case 84:\n                if (this.collideBottom(object, tile_y + this.tile_size)) return;\n                this.collideRight(object, tile_x + this.tile_size);\n                return;\n            case 1: \n                //debugger\n                if (this.collideTop (object, tile_y)) return;\n                this.collideBottom(object, tile_y + this.tile_size);\n                return;\n\n            case 3:\n                this.collideLeft(object, tile_x);\n                return\n            case 4:\n                this.collideRight(object, tile_x + this.tile_size); \n                return;\n            default: \n                break;\n        }\n    }\n\n\n    collideTop(object, tile_y){\n        //debugger\n        if (object.bottom() > tile_y && object.old_bottom() <= tile_y ){\n            object.pos_y = (tile_y-0.01) - object.height;\n            object.delta_y = 0;\n            object.delta_x = 0;\n            object.jumping = false;\n            object.doubleJumping = false;\n            object.type = null;\n            return true;\n        } \n        return false;\n    }\n\n\n    collideLeft(object, tile_x, type){\n        //debugger\n        if (type === 'SLIDE'){\n            if (object.right() > tile_x){\n                object.pos_x = (tile_x - 0.01) - object.width;\n                object.delta_x = 0;\n                object.delta_y = 0.5;\n                object.jumping = false;\n                object.doubleJumping = false;\n                object.type = \"slide-left\";\n                return true;\n            }\n        }\n        else if (object.right() > tile_x && object.old_right() <= tile_x){\n            object.pos_x = (tile_x - 0.01) - object.width;\n            object.delta_x = 0; \n            object.type = null;\n            return true;\n        } else if (object.right() > tile_x) {\n            object.pos_x = (tile_x - 0.01) - object.width;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n\n        return false;\n    }\n\n    collideRight(object, tile_x, type){\n        //debugger\n        if (type === 'SLIDE'){\n            if(object.left() < tile_x){\n                object.pos_x = tile_x;\n                object.delta_y = 0.1;\n                object.delta_x = 0;\n                object.type = \"slide-right\";\n                object.jumping = false;\n                object.doubleJumping = false;\n                return true;\n            }\n        }\n        else if(object.left() < tile_x && object.old_left() >= tile_x){\n            object.pos_x = tile_x;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n        else if (object.left() < tile_x){ \n            object.pos_x = tile_x;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n        return false;\n    }\n\n    collideBottom(object, tile_y){\n        if (object.top() < tile_y && object.old_top() >= tile_y){\n            object.pos_y = tile_y;\n            object.delta_y = 0;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n        return false;\n    }\n\n    update(){\n        this.player.delta_y += this.gravity;\n    \n        this.player.update();\n        this.collision(this.player);\n        this.map_collision(this.player);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n/*\n\n*/\n\n//# sourceURL=webpack:///./src/ui/world.js?");

/***/ })

/******/ });
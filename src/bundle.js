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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root_model */ \"./src/components/root_model.js\");\n\n\n\n\nclass UserModel extends _root_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(pos_x, pos_y) {\n        super();\n        this.pos_x = pos_x;\n        this.pos_y = pos_y;\n        this.old_pos_x = pos_x;\n        this.old_pos_y = pos_y;\n        \n        this.width = 4;\n        this.height = 3;\n        this.delta_x = 0;\n        this.delta_y = 0;\n\n        this.jumping = true;\n        this.doubleJumping = true;\n        this.type = null;\n\n        this.moveLeft = this.moveLeft.bind(this);\n        this.moveRight = this.moveRight.bind(this);\n        this.jump = this.jump.bind(this);\n        this.doubleJump = this.doubleJump.bind(this);\n        this.handleCollisionWithWorld = this.handleCollisionWithWorld.bind(this);\n        \n    }\n\n    moveLeft(){\n        this.delta_x = 0;\n        this.pos_x -= 1;\n    }\n\n    moveRight(){\n        this.delta_x = 0;\n        this.pos_x += 1;\n    }\n\n    jump(){\n        if(!this.jumping){\n            this.jumping = true;\n            if (this.type === 'slide-right'){\n                this.delta_y = -1;\n                this.delta_x = 1;\n                this.type = null;\n            } else if ( this.type === 'slide-left'){\n                this.delta_y = -1;\n                this.delta_x = -1;\n                this.type = null;\n            }\n            else\n                this.delta_y = -2;\n        }\n    }\n\n    doubleJump(){\n        if(this.jumping && !this.doubleJumping){\n            this.doubleJumping = true;\n            this.delta_y = -1;\n        }\n    }\n\n    handleCollisionWithWorld(type, world){\n        switch(type){\n            //Hitting the bound of the world\n            case '1':\n                this.pos_x = 0;\n                this.delta_x = 0;\n    \n                if ((this.pos_y + this.height) < world.height)\n                    this.delta_y = 0.1;\n                else{\n                    this.pos_y = world.height - this.height;\n                    this.delta_y = 0;\n                }\n                break;\n\n            case '2':\n                this.pos_x = world.width - this.width;\n                this.delta_x = 0; \n                this.delta_y = 0.1;\n\n\n                if ((this.pos_y + this.height) < world.height)\n                    this.delta_y = 0.1;\n                else{\n                    this.pos_y = world.height - this.height;\n                    this.delta_y = 0;\n                }\n    \n                break;\n\n            case '3':\n                this.jumping = false;\n                this.doubleJumping = false;\n                this.pos_y = world.height - this.height;\n                this.delta_y = 0;\n                break;\n            case '4': // Hit your head\n                this.delta_y = 0;\n                this.pos_y = 0;\n            default:\n                break;\n        }\n    }\n\n    update(){\n        this.old_pos_x = this.pos_x;\n        this.old_pos_y = this.pos_y;\n        this.pos_x += this.delta_x;\n        this.pos_y += this.delta_y;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);\n\n//# sourceURL=webpack:///./src/components/user_model.js?");

/***/ }),

/***/ "./src/free_run.js":
/*!*************************!*\
  !*** ./src/free_run.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/display */ \"./src/ui/display.js\");\n/* harmony import */ var _ui_world__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/world */ \"./src/ui/world.js\");\n/* harmony import */ var _ui_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/engine */ \"./src/ui/engine.js\");\n/* harmony import */ var _ui_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/controller */ \"./src/ui/controller.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    const display = new _ui_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const world = new _ui_world__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    const player = world.player;\n    const controller = new _ui_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n    const render = () => {\n        display.clearCanvas();\n        display.drawBackground();\n        display.drawMap(world.map, world.columns);\n        display.drawPlayer(player.pos_x, player.pos_y, player.width, player.height, 'red');\n    }\n\n    const update = () => {\n        if (controller.leftPress){\n            player.moveLeft();\n        }\n        if (controller.rightPress)\n            player.moveRight();\n       \n        if (controller.jumpPress)\n            player.jump();\n        if (controller.doublejumpPress)\n            player.doubleJump();\n\n        world.update();\n    }\n\n    window.addEventListener('keydown', controller.handleKeyPress)\n    window.addEventListener('keyup', controller.handleKeyPress)\n\n    display.tile_sheet.image.src='./assets/images/SimpleTileset2.png';\n\n    const engine = new _ui_engine__WEBPACK_IMPORTED_MODULE_2__[\"default\"](update, render)\n\n\n    engine.run();\n});\n\n//# sourceURL=webpack:///./src/free_run.js?");

/***/ }),

/***/ "./src/resources/map-1.json":
/*!**********************************!*\
  !*** ./src/resources/map-1.json ***!
  \**********************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":38,\"infinite\":false,\"layers\":[{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,288,288,288,64,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,352,352,352,768,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,0,0,0,0,0,0,1012,1012,1012,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,842,842,842,842,842,842,842,842,842,842,842,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,693,217,224,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,217,217,217,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,217,217,217,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1013,1013,1013,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,217,217,217,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,0,841,841,841,841,841,841,841,841,841,841,841,841,841,841,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,217,217,224,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,693,141,141,141,141,141,141,141,141,141,141,141,141,141,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,217,217,217,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,693,141,141,141,141,141,141,141,141,141,141,141,141,141,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,757,217,768,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,693,141,141,141,141,141,141,141,141,141,141,141,141,141,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,335,335,335,335,335,335,335,335,335,335,143,0,0,0,0,0,0,0,0,0,0,693,141,141,141,141,141,141,141,141,141,141,141,141,141,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,693,141,141,141,141,141,859,141,859,141,141,141,141,141,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,288,288,288,288,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,693,859,859,859,859,859,859,859,859,859,859,859,859,859,1096,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,693,859,859,859,859,859,859,859,859,859,859,859,859,859,1096,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,283,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,281,859,859,859,859,859,859,859,859,859,859,859,859,859,1096,0,0,0,841,841,841,841,841,841,841,841,841,841,841,841,841,841,841,841,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,859,859,859,859,859,859,859,859,859,859,859,859,1096,1096,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,859,859,859,859,859,859,859,859,859,859,859,859,1096,1096,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,218,218,218,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,859,859,859,859,859,859,859,859,859,859,859,859,859,1096,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,693,217,224,218,218,218,218,218,218,218,0,0,0,0,0,0,0,0,0,0,0,859,1013,1013,1013,1013,859,859,859,859,859,859,859,859,1096,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,693,217,224,218,218,218,218,218,218,218,0,0,0,0,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,836,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1013,1013,1013,1013,218,693,217,224,836,218,218,218,218,218,218,0,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1096,1096,1096,1096,1096,0,0,0,0,0,0,0,0,0,0,0,0,0,1365,1365,1365,1365,1365,1365,1365,1365,1365,836,836,836,836,1365,1365,1365,1365,1365,346,0,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,0,0,0,0,0,0,0,0,0,0,0,0,0,795,795,795,795,795,795,795,795,795,1033,1033,1033,795,795,795,795,795,795,346,0,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,0,0,0,0,0,0,0,0,0,0,0,0,0,795,795,795,795,795,795,795,795,795,1033,1033,1033,795,795,795,795,795,795,346,0,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,0,0,0,0,0,0,0,0,0,0,0,0,0,795,795,795,795,795,795,795,795,795,1033,1033,1033,795,795,795,795,795,795,346,0,0,0,0,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,1159,0,0,0,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1096,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,836,836,836,836,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,1365,836,836,836,836,836,836,836,836,836,836,836,836,836,836,836,836,836,835,835,835],\"height\":38,\"id\":1,\"name\":\"Tile Layer 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":76,\"x\":0,\"y\":0}],\"nextlayerid\":2,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.4\",\"tileheight\":4,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../../../Downloads/SimpleTileset2.tsx\"}],\"tilewidth\":4,\"type\":\"map\",\"version\":1.2,\"width\":76};\n\n//# sourceURL=webpack:///./src/resources/map-1.json?");

/***/ }),

/***/ "./src/resources/map1_collide.json":
/*!*****************************************!*\
  !*** ./src/resources/map1_collide.json ***!
  \*****************************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":38,\"infinite\":false,\"layers\":[{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,4,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,1520,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,1519,2,1,1,1,1,1,1,1,2,1520,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,770,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,3,3,1,1,1,1,1,1,1,1,1,1,1,1520,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,1519,2,1520,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,769,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,770,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1520,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1519,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1519,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1520,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1519,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,1520,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\"height\":38,\"id\":1,\"name\":\"Tile Layer 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":76,\"x\":0,\"y\":0}],\"nextlayerid\":2,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.4\",\"tileheight\":4,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../../../Downloads/SimpleTileset2.tsx\"}],\"tilewidth\":4,\"type\":\"map\",\"version\":1.2,\"width\":76};\n\n//# sourceURL=webpack:///./src/resources/map1_collide.json?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tilesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tilesheet */ \"./src/ui/tilesheet.js\");\n\n\nclass Display {\n    constructor(){\n        this.overlapCanvas = document.createElement(\"canvas\").getContext('2d')\n        this.canvas = document.getElementById('myCanvas');\n        this.ctx = this.canvas.getContext('2d');\n        \n        this.tile_sheet = new _tilesheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 64);\n\n\n        this.drawMap = this.drawMap.bind(this);\n        this.drawPlayer = this.drawPlayer.bind(this);\n\n\n    }\n\n    drawMap(map, columns){\n        for (let index = map.length - 1; index > -1; --index){\n            //debugger  \n\n            let value = map[index] - 1;\n\n            let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;\n            let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;\n            let destination_x = (index % columns) * this.tile_sheet.tile_size;\n            let destination_y = Math.floor(index / columns) * this.tile_sheet.tile_size;\n            this.ctx.drawImage(this.tile_sheet.image, \n                    source_x, source_y, this.tile_sheet.tile_size, \n                    this.tile_sheet.tile_size, destination_x, destination_y,\n                    this.tile_sheet.tile_size, this.tile_sheet.tile_size);\n            this.ctx.imageSmoothingEnabled = false;\n \n        }\n    }\n    \n    drawPlayer(pos_x, pos_y, width, height, color){\n        this.ctx.fillStyle = color;\n        this.ctx.fillRect(Math.round(pos_x), Math.round(pos_y), width, height);\n        this.ctx.imageSmoothingEnabled = false;\n    }\n\n\n    render(){\n        this.ctx.drawImage(this.overlapCanvas.canvas, 0, 0, 800, 800,\n                0, 0, this.canvas.width, this.canvas.height)\n    }\n\n    clearCanvas(){\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n    }\n\n    drawBackground(){\n        this.ctx.fillStyle ='lightblue';\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\n//# sourceURL=webpack:///./src/ui/display.js?");

/***/ }),

/***/ "./src/ui/engine.js":
/*!**************************!*\
  !*** ./src/ui/engine.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Engine {\n    constructor(update, render) {\n        this.accumulated_time = 0;\n        this.time = window.performance.now();\n\n        this.FPS = 1000 / 60;\n        this.update = update;\n        this.render = render;\n        this.updated = false;\n        this.RAF = null;\n        this.run = this.run.bind(this);\n        this.timeout = null;\n    }\n\n    run() {\n        this.update();\n        this.render();\n        this.RAF = window.requestAnimationFrame(this.run);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Engine);\n\n//# sourceURL=webpack:///./src/ui/engine.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/user_model */ \"./src/components/user_model.js\");\n/* harmony import */ var _resources_map_1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/map-1.json */ \"./src/resources/map-1.json\");\nvar _resources_map_1_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/map-1.json */ \"./src/resources/map-1.json\", 1);\n/* harmony import */ var _resources_map1_collide_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/map1_collide.json */ \"./src/resources/map1_collide.json\");\nvar _resources_map1_collide_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/map1_collide.json */ \"./src/resources/map1_collide.json\", 1);\n\n\n\n\n\nclass World {\n    constructor(){\n        this.gravity = 0.098;\n        this.friction = 0.6;\n        this.player = new _components_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 130);\n        this.collision = this.collision.bind(this);\n        this.update = this.update.bind(this);\n        \n        this.tile_size = 4; //represets 4 pixel\n        this.columns = 76; //This has to match evenly to the canvas width\n        this.rows = 38; //match to canvas height\n\n\n        this.height = this.tile_size * this.rows;\n        this.width = this.tile_size * this.columns;\n\n        this.map = _resources_map_1_json__WEBPACK_IMPORTED_MODULE_1__[\"layers\"][0].data;\n        this.collisionMap = _resources_map1_collide_json__WEBPACK_IMPORTED_MODULE_2__[\"layers\"][0].data;\n\n\n        this.collision = this.collision.bind(this);\n        this.isCollide = this.isCollide.bind(this);\n        this.map_collision = this.map_collision.bind(this);\n    }\n\n    //Could be player or maybe even moving platforms\n    collision(object){\n        if (object.pos_x < 0) \n           object.handleCollisionWithWorld('1', this);\n        else if (object.pos_x + object.width  > this.width)\n           object.handleCollisionWithWorld('2', this);\n        \n        //This will be modified so if the user falls out of bound, he/she resets\n        if (object.pos_y + object.height > this.height)\n            object.handleCollisionWithWorld('3', this);\n        else if (object.pos_y < 0) \n            object.handleCollisionWithWorld('4', this);\n        \n    }\n\n\n    //I like snake casing, deal with it.\n    map_collision(object){  \n        let bottom, top, left, right, value;\n\n        top = Math.floor(object.top() / this.tile_size);\n        left = Math.floor(object.left() / this.tile_size);\n        value = this.collisionMap[top * this.columns + left]\n        this.isCollide(value, object, left * this.tile_size, top * this.tile_size);\n       \n\n        top = Math.floor(object.top() / this.tile_size);\n        right = Math.floor(object.right() / this.tile_size);\n        value = this.collisionMap[top * this.columns + right];\n        this.isCollide(value, object, right * this.tile_size, top * this.tile_size);\n        \n    \n\n        bottom = Math.floor(object.bottom() / this.tile_size);\n        left = Math.floor(object.left() / this.tile_size);\n        value = this.collisionMap[top * this.columns + left];\n        this.isCollide(value, object, left * this.tile_size, bottom * this.tile_size);\n\n       \n\n        bottom = Math.floor(object.bottom() / this.tile_size);\n        right = Math.floor(object.right() / this.tile_size);\n        value = this.collisionMap[top * this.columns + right];\n        this.isCollide(value, object, right * this.tile_size, bottom * this.tile_size);\n\n    }   \n\n\n    isCollide(value, object, tile_x, tile_y){\n        switch(value){\n            case 769:\n                this.collideRight(object, tile_x + this.tile_size, 'SLIDE');\n                return;\n            case 770:\n                this.collideLeft(object, tile_x, 'SLIDE');\n                return;\n        \n            case 1519:\n                if (this.collideBottom(object, tile_y + this.tile_size)) return;\n                this.collideLeft(object, tile_x);\n                return\n            case 1520:\n                if (this.collideBottom(object, tile_y + this.tile_size)) return;\n                this.collideRight(object, tile_x + this.tile_size);\n                return;\n            case 1: \n                //debugger\n                if (this.collideTop (object, tile_y)) return;\n                this.collideBottom(object, tile_y + this.tile_size);\n                return;\n            case 2:\n                if (this.collideBottom(object, tile_y + this.tile_size)) return;\n                this.collideTop(object, tile_y);\n                return;\n\n            case 3:\n                this.collideLeft(object, tile_x);\n                return\n            case 4:\n                this.collideRight(object, tile_x + this.tile_size); \n                return;\n            default: \n                break;\n        }\n    }\n\n\n    collideTop(object, tile_y){\n        //debugger\n        if (object.bottom() > tile_y && object.old_bottom() <= tile_y ){\n            //debugger\n            object.pos_y = (tile_y-0.01) - object.height;\n            object.delta_y = 0;\n            object.delta_x = 0;\n            object.jumping = false;\n            object.doubleJumping = false;\n            object.type = null;\n            return true;\n        } \n        return false;\n    }\n\n\n    collideLeft(object, tile_x, type){\n        if (type === 'SLIDE'){\n            if (object.right() > tile_x){\n                object.pos_x = (tile_x - 0.01) - object.width;\n                object.delta_x = 0;\n                object.delta_y = 0.1;\n                object.jumping = false;\n                object.doubleJumping = false;\n                object.type = \"slide-left\";\n                return true;\n            }\n        }\n        else if (object.right() > tile_x && object.old_right() <= tile_x){\n            object.pos_x = (tile_x - 0.01) - object.width;\n            object.delta_x = 0; \n            object.type = null;\n            return true;\n        } else if (object.right() > tile_x) {\n            object.pos_x = (tile_x - 0.01) - object.width;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n\n        return false;\n    }\n\n    collideRight(object, tile_x, type){\n        if (type === 'SLIDE'){\n            if(object.left() < tile_x){\n                object.pos_x = tile_x;\n                object.delta_y = 0.1;\n                object.delta_x = 0;\n                object.type = \"slide-right\";\n                object.jumping = false;\n                object.doubleJumping = false;\n                return true;\n            }\n        }\n        else if(object.left() < tile_x && object.old_left() >= tile_x){\n            object.pos_x = tile_x;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n        else if (object.left() < tile_x){ \n            object.pos_x = tile_x;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n        return false;\n    }\n\n    collideBottom(object, tile_y){\n        if (object.top() < tile_y && object.old_top() >= tile_y){\n            object.pos_y = tile_y;\n            object.delta_y = 0;\n            object.delta_x = 0;\n            object.type = null;\n            return true;\n        }\n        return false;\n    }\n\n    update(){\n        this.player.delta_y += this.gravity;\n    \n        this.player.update();\n        this.collision(this.player);\n        this.map_collision(this.player);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\n\n/*\n\n*/\n\n//# sourceURL=webpack:///./src/ui/world.js?");

/***/ })

/******/ });
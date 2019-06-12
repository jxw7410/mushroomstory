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

/***/ "./src/components/platform_model.js":
/*!******************************************!*\
  !*** ./src/components/platform_model.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_util_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util_tools */ \"./src/utils/util_tools.js\");\n/* harmony import */ var _root_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root_model */ \"./src/components/root_model.js\");\n\n\n\nclass PlatformModel extends _root_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\n    constructor(posX, posY, width, height, canvasContext, userModel) {\n        super();\n        this.posX = posX;\n        this.posY = posY;\n        this.width = width;\n        this.height = height;\n\n    \n\n        this.ctx = canvasContext;\n        this.userModel = userModel;\n    }\n\n\n    drawModel() {\n        this.ctx.beginPath();\n        this.ctx.rect(this.posX, this.posY, this.width, this.height);\n        this.ctx.fillStyle = 'green'\n        this.ctx.fill();\n        this.ctx.closePath();\n\n\n\n        if (!this.userModel.collided){\n            if ( Object(_utils_util_tools__WEBPACK_IMPORTED_MODULE_0__[\"collisionDectection\"])(this.userModel, this) ){\n                    if (!this.userModel.jump){\n                        this.userModel.collided = true;\n    \n                        this.userModel.posY = this.posY - this.userModel.height;\n                        \n                        this.userModel.deltaY = 1;\n                    } else {\n                        this.userModel.posY = this.posY + this.height;\n                        this.userModel.jump = false; \n                        \n                    }\n\n                      this.userModel.deltaY = 1;\n                      this.userModel.collidedElement = this;\n                }\n            }\n    }\n}\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlatformModel);\n\n\n\n//# sourceURL=webpack:///./src/components/platform_model.js?");

/***/ }),

/***/ "./src/components/root_model.js":
/*!**************************************!*\
  !*** ./src/components/root_model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass RootModel{\n    constructor(){\n\n    }\n\n    centerX() {\n        return this.posX + this.width * 0.5;\n    }\n\n    centerY() {\n        return this.posY + this.height * 0.5;\n    }\n\n    top() {\n        return this.posY;\n    }\n\n    bottom() {\n        return this.posY + this.height;\n    }\n\n    left() {\n        return this.posX;\n    }\n\n    right() {\n        return this.posX + this.width;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RootModel);\n\n//# sourceURL=webpack:///./src/components/root_model.js?");

/***/ }),

/***/ "./src/components/user_model.js":
/*!**************************************!*\
  !*** ./src/components/user_model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_util_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util_tools */ \"./src/utils/util_tools.js\");\n/* harmony import */ var _root_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root_model */ \"./src/components/root_model.js\");\n\n\n\nclass UserModel extends _root_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\n    constructor(posX, posY, canvasContext) {\n        super();\n        this.posX = posX;\n        this.posY = posY;\n        this.height = 3;\n        this.width = 5;\n\n        this.ctx = canvasContext;\n\n        this.gravity = 0.05;\n        this.deltaX = 2.2;\n        this.deltaY = 1.5;\n\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.spacePressed = false;\n        this.collided = false;\n        this.collidedElement = null;\n\n\n        //initial config to prevent double jump\n        this.canJump = false;\n        this.jump = false;\n        this.doubleJump = true;\n\n\n        this.eventListeners = this.eventListeners.bind(this);\n        this.handleKeyDown = this.handleKeyDown.bind(this);\n        this.handleKeyUp = this.handleKeyUp.bind(this);\n        this.handleKeyPress = this.handleKeyPress.bind(this);\n\n\n\n        this.eventListeners();\n\n    }\n\n\n\n    eventListeners() {\n        document.addEventListener('keydown', this.handleKeyDown, false);\n        document.addEventListener('keyup', this.handleKeyUp, false);\n        document.addEventListener('keypress', this.handleKeyPress, false);\n    }\n\n    handleKeyDown(e) {\n        if (e.key === 'Right' || e.key === 'ArrowRight')\n            this.rightPressed = true;\n        else if (e.key === 'Left' || e.key === 'ArrowLeft')\n            this.leftPressed = true;\n    }\n\n\n    handleKeyUp(e) {\n        if (e.key === 'Right' || e.key === 'ArrowRight')\n            this.rightPressed = false;\n\n        else if (e.key === 'Left' || e.key === 'ArrowLeft')\n            this.leftPressed = false;\n    }\n\n    handleKeyPress(e) {\n        if (e.key === \" \") {\n            if (!this.jump && !this.doubleJump && this.canJump) {\n                this.collided = false;\n                this.canJump = false;\n                this.jump = true;\n                this.deltaY = -5;\n            } else if (!this.doubleJump) {\n                this.jump = true;\n                this.doubleJump = true;\n                this.deltaY = -4;   \n            }\n        }\n    }\n\n\n    drawModel() {\n        this.ctx.beginPath();\n        this.ctx.rect(Math.floor(this.posX), Math.floor(this.posY), this.width, this.height);\n        this.ctx.fillStyle = 'white';\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        if (this.collided) {\n            this.jump = false;\n            this.doubleJump = false; \n            this.canJump = true;\n            if(!Object(_utils_util_tools__WEBPACK_IMPORTED_MODULE_0__[\"collisionDectection\"])(this, this.collidedElement))\n                this.collided = false;\n        }\n\n        if (!this.collided)\n            this.posY += this.deltaY;\n\n        \n\n        if (this.jump) \n            this.deltaY *= 0.8;\n        else if (!this.collided) { \n            this.deltaY += (this.deltaY * this.gravity);\n\n        }\n\n        if (this.jump && (Math.ceil(this.deltaY) === 0)) {\n            if (!this.doubleJump) {\n                this.canJump = false;\n                this.jump = false;\n                this.deltaY = 1.5;\n            }\n            else {\n                this.deltaY = 1.5;\n                this.jump = false;\n            }\n        }\n\n        if (this.rightPressed)\n            if (this.jump)\n                this.posX += (this.deltaX + 1);\n            else\n                this.posX += this.deltaX;\n        else if (this.leftPressed)\n            if (this.jump)\n                this.posX -= (this.deltaX + 1);\n            else\n                this.posX -= this.deltaX\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);\n\n//# sourceURL=webpack:///./src/components/user_model.js?");

/***/ }),

/***/ "./src/free_run.js":
/*!*************************!*\
  !*** ./src/free_run.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user_model */ \"./src/components/user_model.js\");\n/* harmony import */ var _components_platform_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/platform_model */ \"./src/components/platform_model.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n    const canvas = document.getElementById('myCanvas');\n    const context = canvas.getContext('2d');\n    const canvasWidth = canvas.width;\n    const canvasHeight = canvas.height;\n    const Player = new _components_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 0, context);\n    const Platform1 = new _components_platform_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, canvasHeight-10, canvasWidth-20, 50, context, Player );\n    const Platform2 = new _components_platform_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100, canvasHeight-30, canvasWidth, 10, context, Player);\n\n    const animation = () => {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n        Player.drawModel();\n        Platform1.drawModel();\n        Platform2.drawModel();\n        window.requestAnimationFrame(animation)\n    }\n    window.requestAnimationFrame(animation)\n\n});\n\n//# sourceURL=webpack:///./src/free_run.js?");

/***/ }),

/***/ "./src/utils/util_tools.js":
/*!*********************************!*\
  !*** ./src/utils/util_tools.js ***!
  \*********************************/
/*! exports provided: collisionDectection, collisionDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionDectection\", function() { return collisionDectection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionDirection\", function() { return collisionDirection; });\n//Always user model against the other object;\nconst collisionDectection = (obj1, obj2) => {\n    if (obj1.top() > obj2.bottom() || obj1.right() < obj2.left() || obj1.bottom() < obj2.top() || obj1.left() > obj2.right())\n        return false;\n    return true;\n}\n\nconst collisionDirection = (obj1, obj2) => {\n    let vector_x = obj1.centerX() - obj2.centerX();\n    let vector_y = obj1.centerY() - obj2.centerY();\n\n    \n}\n\n//# sourceURL=webpack:///./src/utils/util_tools.js?");

/***/ })

/******/ });
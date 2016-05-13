/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="tsd.d.ts"/>
	var routeConfig_1 = __webpack_require__(6);
	var loader_1 = __webpack_require__(9);
	var loader_2 = __webpack_require__(12);
	var loader_3 = __webpack_require__(14);
	var app = angular.module('karelHalaCV', ['ngMaterial', 'ngMdIcons', 'ui.router']);
	routeConfig_1.default(app);
	loader_1.default(app);
	loader_2.default(app);
	loader_3.default(app);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../tsd.d.ts"/>
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module
	        .config(["$stateProvider", function ($stateProvider) {
	        $stateProvider.state('home', {
	            views: {
	                toolbar: {
	                    template: __webpack_require__(7),
	                    controller: 'basicInformationController as basic'
	                },
	                content: {
	                    template: __webpack_require__(8)
	                }
	            }
	        });
	    }])
	        .run(["$state", function ($state) {
	        $state.go('home');
	    }]);
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div ng-controller=\"basicInformationController as basic\">\n  <div class=\"md-toolbar-tools\">\n    <speed-dial></speed-dial>\n    <h2>\n      <span>{{basic.personData.name}} {{basic.personData.surName}}</span>\n    </h2>\n    <span flex></span>\n    <basic-info-menu person-object=\"basic.personData\"></basic-info-menu>\n\n  </div>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"md-whiteframe-3dp cv-content\">\n    <h3>This is Timeline</h3>\n    <p>In et pretium mi, in pharetra odio. Suspendisse a urna dapibus, viverra turpis quis, tincidunt neque. Donec eget auctor tellus. Morbi et ipsum turpis. Suspendisse potenti. Nam sodales quis augue in semper. Vivamus ac mi sit amet neque gravida dictum. Etiam quis egestas metus, quis mattis enim. Nullam at velit nec tellus vehicula tristique vel non odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed sollicitudin ante, pulvinar fermentum enim. Donec pulvinar, ex blandit mattis facilisis, nibh urna sagittis nisl, eu mollis ex ex pulvinar metus. Cras id su</p>\n  </div>\n  <div class=\"md-whiteframe-3dp cv-content\">\n    <h3>This is Graphs</h3>\n    <div layout=\"row\">\n      <md-card flex-gt-sm=\"50\">\n        <md-card-title>\n          <md-card-title-text>\n            <span class=\"md-headline\">Card with  image</span>\n            <span class=\"md-subhead\">Extra Large</span>\n          </md-card-title-text>\n        </md-card-title>\n        <md-card-content layout=\"row\" layout-align=\"space-between\">\n          <div class=\"md-media-xl card-media\">\n            <img src=\"https://i.ytimg.com/vi/jzdEi0YHEKM/maxresdefault.jpg\" width=\"240px\">\n          </div>\n          <md-card-actions layout=\"column\">\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>menu</md-icon>\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>mode_comment</md-icon>\n            </md-button>\n          </md-card-actions>\n        </md-card-content>\n      </md-card>\n      <md-card flex-gt-sm=\"50\">\n        <md-card-title>\n          <md-card-title-text>\n            <span class=\"md-headline\">Card with  image</span>\n            <span class=\"md-subhead\">Extra Large</span>\n          </md-card-title-text>\n        </md-card-title>\n        <md-card-content layout=\"row\" layout-align=\"space-between\">\n          <div class=\"md-media-xl card-media\">\n            <img src=\"https://i.ytimg.com/vi/jzdEi0YHEKM/maxresdefault.jpg\" width=\"240px\">\n          </div>\n          <md-card-actions layout=\"column\">\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>menu</md-icon>\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>mode_comment</md-icon>\n            </md-button>\n          </md-card-actions>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var basicInformationLoader_1 = __webpack_require__(10);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.service('basicInformationLoader', basicInformationLoader_1.default);
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var moment = __webpack_require__(11);
	var BasicInformationLoader = (function () {
	    /* @ngInject */
	    function BasicInformationLoader($http) {
	        this.$http = $http;
	        this.personObject = {};
	    }
	    BasicInformationLoader.$inject = ["$http"];
	    BasicInformationLoader.prototype.getPersonObject = function () {
	        var _this = this;
	        if (this.personObject.hasOwnProperty('name')) {
	            return this.personObject;
	        }
	        else {
	            return this.loadPersonPObject().then(function (personData) {
	                _this.fillObject(personData);
	                _this.personObject = personData;
	                return _this.personObject;
	            });
	        }
	    };
	    BasicInformationLoader.prototype.fillObject = function (personData) {
	        personData.dateObject = moment(personData.bornTimeStamp);
	        personData.getAge = function () {
	            personData.diffTime = moment.duration(moment().diff(personData.dateObject));
	            return Math.round(personData.diffTime.asYears());
	        };
	    };
	    BasicInformationLoader.prototype.loadPersonPObject = function () {
	        return this.$http.get('/data/basic_info.json').then(function (responseData) {
	            return responseData.data;
	        });
	    };
	    return BasicInformationLoader;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicInformationLoader;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = moment;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var basicInformationControler_1 = __webpack_require__(13);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.controller('basicInformationController', basicInformationControler_1.default);
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var BasicInformationController = (function () {
	    /* @ngInject */
	    function BasicInformationController(basicInformationLoader) {
	        var _this = this;
	        this.basicInformationLoader = basicInformationLoader;
	        var person = this.basicInformationLoader.getPersonObject();
	        if (person.hasOwnProperty('$$state')) {
	            person.then(function (personData) {
	                _this.personData = personData;
	            });
	        }
	        console.log(this);
	    }
	    BasicInformationController.$inject = ["basicInformationLoader"];
	    return BasicInformationController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicInformationController;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var loader_1 = __webpack_require__(15);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    loader_1.default(module);
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../tsd.d.ts"/>
	var basicInfoMenuComponent_1 = __webpack_require__(16);
	var speedDialComponent_1 = __webpack_require__(19);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('basicInfoMenu', new basicInfoMenuComponent_1.default);
	    module.component('speedDial', new speedDialComponent_1.default);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var basicMenuController_1 = __webpack_require__(17);
	var BasicMenuComponent = (function () {
	    function BasicMenuComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(18);
	        this.controller = basicMenuController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {
	            personObject: '='
	        };
	    }
	    return BasicMenuComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicMenuComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var BasicMenuController = (function () {
	    function BasicMenuController() {
	        console.log(this);
	    }
	    BasicMenuController.prototype.openMenu = function ($mdOpenMenu, ev) {
	        $mdOpenMenu(ev);
	    };
	    return BasicMenuController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicMenuController;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<md-menu md-position-mode=\"target-right target\">\n  <md-button class=\"md-fab move-down\" aria-label=\"Show basic details\" ng-click=\"vm.openMenu($mdOpenMenu, $event)\">\n    <md-icon>account_circle</md-icon>\n  </md-button>\n  <md-menu-content width=\"6\">\n    <md-menu-item class=\"cv-menu-picture\">\n      <span class=\"cv-bold\"></span>\n      <span><img src=\"{{vm.personObject.picture}}\"></span>\n    </md-menu-item>\n    <md-menu-item>\n      <span class=\"cv-bold\">Name and Surname</span>\n      <span>{{vm.personObject.name}} {{vm.personObject.surName}}</span>\n    </md-menu-item>\n    <md-menu-divider></md-menu-divider>\n    <md-menu-item>\n      <span class=\"cv-bold\">Birth date</span>\n      <span>{{vm.personObject.dateObject.format('DD.MM.YYYY')}}</span>\n    </md-menu-item>\n    <md-menu-item>\n      <span class=\"cv-bold\">Age</span>\n      <span>{{vm.personObject.getAge()}}</span>\n    </md-menu-item>\n  </md-menu-content>\n</md-menu>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var speedDialController_1 = __webpack_require__(20);
	var SpeedDialComponent = (function () {
	    function SpeedDialComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(21);
	        this.controller = speedDialController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {};
	    }
	    return SpeedDialComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SpeedDialComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var SpeedDialController = (function () {
	    function SpeedDialController() {
	        this.isOpen = false;
	        this.selectedMode = 'md-scale';
	        this.direction = 'down';
	    }
	    return SpeedDialController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SpeedDialController;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<md-fab-speed-dial md-open=\"vm.isOpen\" md-direction=\"{{vm.direction}}\"\n                   ng-class=\"vm.selectedMode\" class=\"cv-move-speed-dial\">\n  <md-fab-trigger>\n    <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n      <md-icon>menu</md-icon>\n    </md-button>\n  </md-fab-trigger>\n  <md-fab-actions>\n    <md-button aria-label=\"Twitter\" class=\"md-fab md-raised md-mini\">\n      <md-tooltip md-direction=\"right\"\n                  md-autohide=\"false\">Timeline</md-tooltip>\n      <md-icon>device_hub</md-icon>\n    </md-button>\n    <md-button aria-label=\"Twitter\" class=\"md-fab md-raised md-mini\">\n      <md-tooltip md-direction=\"right\"\n                  md-autohide=\"false\">Graphs</md-tooltip>\n      <md-icon>equalizer</md-icon>\n    </md-button>\n  </md-fab-actions>\n</md-fab-speed-dial>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=karel-hala-cv.js.map
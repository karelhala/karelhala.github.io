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
	__webpack_require__(5);
	module.exports = __webpack_require__(30);


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
	var loader_2 = __webpack_require__(13);
	var loader_3 = __webpack_require__(15);
	var app = angular.module('karelHalaCV', ['ngMaterial', 'ngMdIcons', 'ui.router', 'ngAnimate', 'duScroll']);
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
	        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
	        $urlRouterProvider.otherwise('/');
	        $locationProvider.html5Mode({
	            enabled: false,
	            requireBase: false
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

	module.exports = "<div>\n  <div class=\"md-whiteframe-3dp cv-content cv-timeline-trend\" id=\"timeline-trend\" layout=\"column\">\n    <div></div>\n    <timeline></timeline>\n  </div>\n  <div class=\"md-whiteframe-3dp cv-content\" id=\"work-graphs\">\n    <div layout-gt-md=\"row\" layout-xs=\"column\">\n      <md-card flex-gt-sm=\"50\">\n        <md-card-title>\n          <md-card-title-text>\n            <span class=\"md-headline\">Card with  image</span>\n            <span class=\"md-subhead\">Extra Large</span>\n          </md-card-title-text>\n        </md-card-title>\n        <md-card-content layout=\"row\" layout-align=\"space-between\">\n          <div class=\"md-media-xl card-media\" style=\"width: 100%;\">\n            <img src=\"https://i.ytimg.com/vi/jzdEi0YHEKM/maxresdefault.jpg\" style=\"width: 100%; height:100%\">\n          </div>\n          <md-card-actions layout=\"column\">\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>menu</md-icon>\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>mode_comment</md-icon>\n            </md-button>\n          </md-card-actions>\n        </md-card-content>\n      </md-card>\n      <md-card flex-gt-sm=\"50\">\n        <md-card-title>\n          <md-card-title-text>\n            <span class=\"md-headline\">Card with  image</span>\n            <span class=\"md-subhead\">Extra Large</span>\n          </md-card-title-text>\n        </md-card-title>\n        <md-card-content layout=\"row\" layout-align=\"space-between\">\n          <div class=\"md-media-xl card-media\" style=\"width: 100%;\">\n            <img src=\"https://i.ytimg.com/vi/jzdEi0YHEKM/maxresdefault.jpg\" style=\"width: 100%; height:100%\">\n          </div>\n          <md-card-actions layout=\"column\">\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>menu</md-icon>\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n              <md-icon>mode_comment</md-icon>\n            </md-button>\n          </md-card-actions>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var basicInformationLoader_1 = __webpack_require__(10);
	var timelineLoader_1 = __webpack_require__(12);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.service('basicInformationLoader', basicInformationLoader_1.default);
	    module.service('timelineLoader', timelineLoader_1.default);
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
	            return this.loadPersonObject().then(function (personData) {
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
	    BasicInformationLoader.prototype.loadPersonObject = function () {
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
	var moment = __webpack_require__(11);
	var TimelineLoader = (function () {
	    /* @ngInject */
	    function TimelineLoader($http) {
	        this.$http = $http;
	        this.timelineData = {};
	    }
	    TimelineLoader.$inject = ["$http"];
	    TimelineLoader.prototype.getTimelineData = function () {
	        var _this = this;
	        if (this.timelineData.length > 0) {
	            return this.timelineData;
	        }
	        else {
	            return this.loadTimelineObject().then(function (timelineData) {
	                angular.forEach(timelineData, function (oneRecord) {
	                    _this.fillObject(oneRecord);
	                });
	                _this.timelineData = timelineData;
	                return _this.timelineData;
	            });
	        }
	    };
	    TimelineLoader.prototype.fillObject = function (record) {
	        record.timeObject = moment(record.time);
	        record.getTime = function () {
	            var timeString = '';
	            record.diffTime = moment.duration(moment().diff(record.time));
	            if (record.diffTime.years() !== 0) {
	                timeString += record.diffTime.years() + ' years ';
	            }
	            if (record.diffTime.months() !== 0) {
	                timeString += record.diffTime.months() + ' months ';
	            }
	            if (record.diffTime.days() !== 0) {
	                if (timeString.length !== 0) {
	                    timeString += 'and ';
	                }
	                timeString += record.diffTime.days() + ' days ';
	            }
	            timeString += 'ago';
	            return timeString;
	        };
	    };
	    TimelineLoader.prototype.loadTimelineObject = function () {
	        return this.$http.get('/data/timeline.json').then(function (responseData) {
	            return responseData.data;
	        });
	    };
	    return TimelineLoader;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineLoader;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var basicInformationControler_1 = __webpack_require__(14);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.controller('basicInformationController', basicInformationControler_1.default);
	};


/***/ },
/* 14 */
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
	    }
	    BasicInformationController.$inject = ["basicInformationLoader"];
	    return BasicInformationController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicInformationController;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var loader_1 = __webpack_require__(16);
	var loader_2 = __webpack_require__(23);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    loader_1.default(module);
	    loader_2.default(module);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../tsd.d.ts"/>
	var basicInfoMenuComponent_1 = __webpack_require__(17);
	var speedDialComponent_1 = __webpack_require__(20);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('basicInfoMenu', new basicInfoMenuComponent_1.default);
	    module.component('speedDial', new speedDialComponent_1.default);
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var basicMenuController_1 = __webpack_require__(18);
	var BasicMenuComponent = (function () {
	    function BasicMenuComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(19);
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
/* 18 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var BasicMenuController = (function () {
	    function BasicMenuController() {
	    }
	    BasicMenuController.prototype.openMenu = function ($mdOpenMenu, ev) {
	        $mdOpenMenu(ev);
	    };
	    return BasicMenuController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicMenuController;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<md-menu md-position-mode=\"target-right target\">\n  <md-button class=\"md-fab move-down\" aria-label=\"Show basic details\" ng-click=\"vm.openMenu($mdOpenMenu, $event)\">\n    <md-icon>account_circle</md-icon>\n  </md-button>\n  <md-menu-content width=\"6\">\n    <md-menu-item>\n      <span class=\"cv-bold\"></span>\n      <span><img src=\"{{vm.personObject.picture}}\"></span>\n    </md-menu-item>\n    <md-menu-item>\n      <span flex></span>\n    </md-menu-item>\n    <md-menu-item>\n      <span class=\"cv-bold\">Name and Surname</span>\n      <span>{{vm.personObject.name}} {{vm.personObject.surName}}</span>\n    </md-menu-item>\n    <md-menu-divider></md-menu-divider>\n    <md-menu-item>\n      <span class=\"cv-bold\">Birth date</span>\n      <span>{{vm.personObject.dateObject.format('DD.MM.YYYY')}}</span>\n    </md-menu-item>\n    <md-menu-item>\n      <span class=\"cv-bold\">Age</span>\n      <span>{{vm.personObject.getAge()}}</span>\n    </md-menu-item>\n  </md-menu-content>\n</md-menu>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var speedDialController_1 = __webpack_require__(21);
	var SpeedDialComponent = (function () {
	    function SpeedDialComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(22);
	        this.controller = speedDialController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {};
	    }
	    return SpeedDialComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SpeedDialComponent;


/***/ },
/* 21 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var SpeedDialController = (function () {
	    /* @ngInject */
	    function SpeedDialController($window) {
	        this.$window = $window;
	        this.isOpen = false;
	        this.selectedMode = 'md-scale';
	        this.direction = 'down';
	        this.menuIcon = 'menu';
	        this.duration = 2000;
	        this.container = angular.element(document.getElementById('content-container'));
	    }
	    SpeedDialController.$inject = ["$window"];
	    SpeedDialController.prototype.scrollToElement = function (elementId) {
	        var element = angular.element(document.getElementById(elementId));
	        this.container.scrollToElementAnimated(element, 0, 400);
	    };
	    return SpeedDialController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SpeedDialController;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<md-fab-speed-dial md-open=\"vm.isOpen\" md-direction=\"{{vm.direction}}\"\n                   ng-class=\"vm.selectedMode\" class=\"cv-move-speed-dial\">\n  <md-fab-trigger>\n    <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n      <ng-md-icon icon=\"{{vm.isOpen ? 'format_align_left' : 'menu'}}\" ng-attr-style=\"fill: {{fill}}\" options='{\"rotation\": \"none\"}'></ng-md-icon>\n    </md-button>\n  </md-fab-trigger>\n  <md-fab-actions>\n    <md-button aria-label=\"Twitter\" class=\"md-fab md-raised md-mini\" ng-click=\"vm.scrollToElement('timeline-trend')\">\n      <md-tooltip md-direction=\"right\"\n                  md-autohide=\"false\">Timeline</md-tooltip>\n      <md-icon>device_hub</md-icon>\n    </md-button>\n    <md-button aria-label=\"Twitter\" class=\"md-fab md-raised md-mini\" ng-click=\"vm.scrollToElement('work-graphs')\">\n      <md-tooltip md-direction=\"right\"\n                  md-autohide=\"false\">Graphs</md-tooltip>\n      <md-icon>equalizer</md-icon>\n    </md-button>\n  </md-fab-actions>\n</md-fab-speed-dial>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var timelineComponent_1 = __webpack_require__(24);
	var timelineEntryComponent_1 = __webpack_require__(27);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('timeline', new timelineComponent_1.default);
	    module.component('timelineEntry', new timelineEntryComponent_1.default);
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var timelineController_1 = __webpack_require__(25);
	var TimelineComponent = (function () {
	    function TimelineComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(26);
	        this.controller = timelineController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {};
	    }
	    return TimelineComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var TimelineController = (function () {
	    function TimelineController(timelineLoader, basicInformationLoader, $window) {
	        var _this = this;
	        this.timelineLoader = timelineLoader;
	        this.basicInformationLoader = basicInformationLoader;
	        this.$window = $window;
	        var person = this.basicInformationLoader.getPersonObject();
	        if (person.hasOwnProperty('$$state')) {
	            person.then(function (personData) {
	                _this.personData = personData;
	            });
	        }
	        var timeline = this.timelineLoader.getTimelineData();
	        if (timeline.hasOwnProperty('$$state')) {
	            timeline.then(function (timelineData) {
	                _this.entries = timelineData;
	            });
	        }
	    }
	    TimelineController.prototype.getClass = function () {
	        return {
	            'all-right': this.$window.innerWidth < 960
	        };
	    };
	    return TimelineController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineController;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" id=\"cv-timeline-container\">\n  <div class=\"row\">\n    <div class=\"timeline-centered\" ng-class=\"vm.getClass()\">\n      <timeline-entry ng-repeat=\"entry in vm.entries\"\n                      entry=\"entry\"\n                      person-object=\"vm.personData\"\n                      is-left=\"$odd\"></timeline-entry>\n      <article class=\"timeline-entry begin\">\n\n        <div class=\"timeline-end\">\n\n          <div class=\"arrow-down\"></div>\n\n        </div>\n\n      </article>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var timelineEntryController_1 = __webpack_require__(28);
	var TimelineEntryComponent = (function () {
	    function TimelineEntryComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(29);
	        this.controller = timelineEntryController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {
	            isLeft: '=',
	            personObject: '=',
	            entry: '='
	        };
	    }
	    return TimelineEntryComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineEntryComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var TimelineEntryController = (function () {
	    /* @ngInject */
	    function TimelineEntryController($window) {
	        this.$window = $window;
	        this.clicked = false;
	        console.log(this);
	    }
	    TimelineEntryController.$inject = ["$window"];
	    TimelineEntryController.prototype.getCurrentClasses = function () {
	        return {
	            'left-aligned': this.isLeft && this.$window.innerWidth > 960
	        };
	    };
	    TimelineEntryController.prototype.bounce = function () {
	        return {
	            'is-hidden': !this.clicked,
	            'bounce-in': this.clicked
	        };
	    };
	    return TimelineEntryController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineEntryController;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<article class=\"timeline-entry\" ng-class=\"vm.getCurrentClasses()\">\n\n  <div class=\"timeline-entry-inner\">\n    <time class=\"timeline-time\" datetime=\"{{vm.entry.timeObject.format('YYYY-MM-DD')}}\"><span>{{vm.entry.timeObject.format('DD.MM.YYYY')}}</span>\n      <span class=\"cv-time\">{{vm.entry.getTime()}}</span></time>\n    <div class=\"timeline-icon {{vm.entry['color-class']}}\" ng-click=\"vm.clicked = !vm.clicked\">\n      <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n        <md-icon>{{vm.entry.icon}}</md-icon>\n      </md-button>\n    </div>\n\n    <div class=\"timeline-label\" ng-class=\"vm.bounce()\">\n      <h2>{{vm.personObject.name}} {{vm.personObject.surName}} <span> {{vm.entry.title}}</span></h2>\n      <p>{{vm.entry.text}}</p>\n    </div>\n  </div>\n\n</article>\n"

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=karel-hala-cv.js.map
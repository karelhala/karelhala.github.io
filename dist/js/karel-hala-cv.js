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
	module.exports = __webpack_require__(43);


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
	var loader_2 = __webpack_require__(16);
	var loader_3 = __webpack_require__(18);
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

	module.exports = "<div ng-controller=\"basicInformationController as basic\">\n  <div class=\"md-toolbar-tools\">\n    <speed-dial items=\"basic.items\" direction=\"basic.direction\" on-click=\"basic.scrollToElement(item)\"></speed-dial>\n    <h2>\n      <span>{{basic.personData.name}} {{basic.personData.surName}}</span>\n    </h2>\n    <span flex></span>\n    <basic-info-menu person-object=\"basic.personData\"></basic-info-menu>\n\n  </div>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"md-whiteframe-3dp cv-content cv-timeline-trend\" id=\"timeline-trend\" layout=\"column\">\n    <div></div>\n    <timeline></timeline>\n  </div>\n  <div class=\"md-whiteframe-3dp cv-content\" id=\"work-graphs\">\n    <div layout-gt-md=\"row\" layout-xs=\"column\">\n      <work-tile flex-gt-sm=\"50\"></work-tile>\n    </div>\n  </div>\n  <div class=\"md-whiteframe-3dp cv-content cv-contacts\" id=\"contacts\">\n    <contacts></contacts>\n  </div>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var basicInformationLoader_1 = __webpack_require__(10);
	var timelineLoader_1 = __webpack_require__(12);
	var contactLoader_1 = __webpack_require__(13);
	var jobsLoader_1 = __webpack_require__(14);
	var schoolLoader_1 = __webpack_require__(15);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.service('basicInformationLoader', basicInformationLoader_1.default);
	    module.service('timelineLoader', timelineLoader_1.default);
	    module.service('contactLoader', contactLoader_1.default);
	    module.service('jobsLoader', jobsLoader_1.default);
	    module.service('schoolLoader', schoolLoader_1.default);
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
	        record.isVisible = false;
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
/***/ function(module, exports) {

	///<reference path="../tsd.d.ts"/>
	"use strict";
	var ContactLoader = (function () {
	    /* @ngInject */
	    function ContactLoader($http) {
	        this.$http = $http;
	        this.contactData = [];
	    }
	    ContactLoader.$inject = ["$http"];
	    ContactLoader.prototype.getContactData = function () {
	        if (this.contactData.length > 0) {
	            return this.contactData;
	        }
	        else {
	            return this.loadContactData();
	        }
	    };
	    ContactLoader.prototype.loadContactData = function () {
	        return this.$http.get('/data/contact.json').then(function (responseData) {
	            return responseData.data;
	        });
	    };
	    return ContactLoader;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContactLoader;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var moment = __webpack_require__(11);
	var JobsLoader = (function () {
	    /* @ngInject */
	    function JobsLoader($http) {
	        this.$http = $http;
	        this.jobsData = {};
	    }
	    JobsLoader.$inject = ["$http"];
	    JobsLoader.prototype.getJobsData = function () {
	        var _this = this;
	        if (this.jobsData.length > 0) {
	            return this.jobsData;
	        }
	        else {
	            return this.loadJobsObject().then(function (jobsData) {
	                _this.jobsData.data = jobsData;
	                _this.fillObject(jobsData);
	                return _this.jobsData;
	            });
	        }
	    };
	    JobsLoader.prototype.fillObject = function (record) {
	        var _this = this;
	        this.jobsData.graphData = {
	            colors: {},
	            type: '',
	            data: [],
	            names: {}
	        };
	        angular.forEach(record, function (oneJob) {
	            _this.jobsData.graphData.colors[oneJob.id] = oneJob.color;
	            _this.jobsData.graphData.names[oneJob.id] = oneJob.name;
	            var data = moment.duration(moment(oneJob.outTime).diff(moment(oneJob.inTime)));
	            _this.jobsData.graphData.data.push([oneJob.id, Math.round(data.asMonths())]);
	        });
	    };
	    JobsLoader.prototype.loadJobsObject = function () {
	        return this.$http.get('/data/jobs.json').then(function (responseData) {
	            return responseData.data;
	        });
	    };
	    return JobsLoader;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = JobsLoader;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var SchoolLoader = (function () {
	    /* @ngInject */
	    function SchoolLoader($http) {
	        this.$http = $http;
	        this.schoolData = {};
	    }
	    SchoolLoader.$inject = ["$http"];
	    SchoolLoader.prototype.getJobsData = function () {
	        var _this = this;
	        if (this.schoolData.length > 0) {
	            return this.schoolData;
	        }
	        else {
	            return this.loadSchoolsObject().then(function (schoolData) {
	                _this.schoolData = schoolData;
	                return _this.schoolData;
	            });
	        }
	    };
	    SchoolLoader.prototype.loadSchoolsObject = function () {
	        return this.$http.get('/data/schools.json').then(function (responseData) {
	            return responseData.data;
	        });
	    };
	    return SchoolLoader;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SchoolLoader;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var basicInformationControler_1 = __webpack_require__(17);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.controller('basicInformationController', basicInformationControler_1.default);
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var BasicInformationController = (function () {
	    /* @ngInject */
	    function BasicInformationController($window, basicInformationLoader) {
	        var _this = this;
	        this.$window = $window;
	        this.basicInformationLoader = basicInformationLoader;
	        this.direction = 'down';
	        this.initSpeedDial();
	        this.container = angular.element(document.getElementById('content-container'));
	        var person = this.basicInformationLoader.getPersonObject();
	        if (person.hasOwnProperty('$$state')) {
	            person.then(function (personData) {
	                _this.personData = personData;
	            });
	        }
	    }
	    BasicInformationController.$inject = ["$window", "basicInformationLoader"];
	    BasicInformationController.prototype.scrollToElement = function (item) {
	        var element = angular.element(document.getElementById(item.scrollTo));
	        this.container.scrollToElementAnimated(element, 0, 400);
	    };
	    BasicInformationController.prototype.initSpeedDial = function () {
	        this.items = [
	            {
	                scrollTo: 'timeline-trend',
	                tooltip: 'Timeline',
	                tooltipDirection: 'right',
	                icon: 'device_hub',
	            },
	            {
	                scrollTo: 'work-graphs',
	                tooltip: 'Graphs',
	                tooltipDirection: 'right',
	                icon: 'equalizer',
	            },
	            {
	                scrollTo: 'contacts',
	                tooltip: 'Contacts',
	                tooltipDirection: 'right',
	                icon: 'contacts',
	            }
	        ];
	    };
	    return BasicInformationController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicInformationController;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../tsd.d.ts"/>
	var loader_1 = __webpack_require__(19);
	var loader_2 = __webpack_require__(26);
	var loader_3 = __webpack_require__(33);
	var loader_4 = __webpack_require__(37);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    loader_1.default(module);
	    loader_2.default(module);
	    loader_3.default(module);
	    loader_4.default(module);
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../tsd.d.ts"/>
	var basicInfoMenuComponent_1 = __webpack_require__(20);
	var speedDialComponent_1 = __webpack_require__(23);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('basicInfoMenu', new basicInfoMenuComponent_1.default);
	    module.component('speedDial', new speedDialComponent_1.default);
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var basicMenuController_1 = __webpack_require__(21);
	var BasicMenuComponent = (function () {
	    function BasicMenuComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(22);
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	module.exports = "<md-menu md-position-mode=\"target-right target\">\n  <md-button class=\"md-fab move-down\" aria-label=\"Show basic details\" ng-click=\"vm.openMenu($mdOpenMenu, $event)\">\n    <md-icon>account_circle</md-icon>\n  </md-button>\n  <md-menu-content width=\"6\">\n    <md-menu-item>\n      <span class=\"cv-bold\"></span>\n      <span><img src=\"{{vm.personObject.picture}}\"></span>\n    </md-menu-item>\n    <md-menu-item>\n      <span flex></span>\n    </md-menu-item>\n    <md-menu-item>\n      <span class=\"cv-bold\">Name and Surname</span>\n      <span>{{vm.personObject.name}} {{vm.personObject.surName}}</span>\n    </md-menu-item>\n    <md-menu-divider></md-menu-divider>\n    <md-menu-item>\n      <span class=\"cv-bold\">Birth date</span>\n      <span>{{vm.personObject.dateObject.format('DD.MM.YYYY')}}</span>\n    </md-menu-item>\n    <md-menu-item>\n      <span class=\"cv-bold\">Age</span>\n      <span>{{vm.personObject.getAge()}}</span>\n    </md-menu-item>\n  </md-menu-content>\n</md-menu>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var speedDialController_1 = __webpack_require__(24);
	var SpeedDialComponent = (function () {
	    function SpeedDialComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(25);
	        this.controller = speedDialController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {
	            direction: '=',
	            items: '=',
	            onClick: '&'
	        };
	    }
	    return SpeedDialComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SpeedDialComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var SpeedDialController = (function () {
	    /* @ngInject */
	    function SpeedDialController($window) {
	        this.$window = $window;
	        this.isOpen = false;
	        this.selectedMode = 'md-scale';
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "<md-fab-speed-dial md-open=\"vm.isOpen\" md-direction=\"{{vm.direction}}\"\n                   ng-class=\"vm.selectedMode\" class=\"cv-move-speed-dial\">\n  <md-fab-trigger>\n    <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n      <ng-md-icon icon=\"{{vm.isOpen ? 'format_align_left' : 'menu'}}\" ng-attr-style=\"fill: {{fill}}\" options='{\"rotation\": \"none\"}'></ng-md-icon>\n    </md-button>\n  </md-fab-trigger>\n  <md-fab-actions>\n    <md-button ng-repeat=\"item in vm.items\"\n               aria-label=\"{{item.tooltip}}\"\n               class=\"md-fab md-raised md-mini\"\n               ng-click=\"vm.onClick({item: item})\">\n      <md-tooltip md-direction=\"{{item.tooltipDirection}}\"\n                  md-autohide=\"false\">{{item.tooltip}}</md-tooltip>\n      <md-icon>{{item.icon}}</md-icon>\n    </md-button>\n  </md-fab-actions>\n</md-fab-speed-dial>\n"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var timelineComponent_1 = __webpack_require__(27);
	var timelineEntryComponent_1 = __webpack_require__(30);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('timeline', new timelineComponent_1.default);
	    module.component('timelineEntry', new timelineEntryComponent_1.default);
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var timelineController_1 = __webpack_require__(28);
	var TimelineComponent = (function () {
	    function TimelineComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(29);
	        this.controller = timelineController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {};
	    }
	    return TimelineComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var TimelineController = (function () {
	    function TimelineController(timelineLoader, basicInformationLoader, $window) {
	        var _this = this;
	        this.timelineLoader = timelineLoader;
	        this.basicInformationLoader = basicInformationLoader;
	        this.$window = $window;
	        this.container = angular.element(document.getElementById('content-container'));
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
	                setTimeout(function () {
	                    _this.showVisible();
	                });
	            });
	        }
	        else {
	            setTimeout(function () {
	                _this.showVisible();
	            });
	        }
	        this.container.on('scroll', function () {
	            _this.showVisible();
	        });
	    }
	    Object.defineProperty(TimelineController, "offset", {
	        get: function () { return 100; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    TimelineController.prototype.showVisible = function () {
	        var _this = this;
	        var timelineEntries = document.getElementsByClassName('timeline-entry');
	        angular.forEach(timelineEntries, function (oneEntry, key) {
	            if ((Math.abs(oneEntry.getBoundingClientRect().top + TimelineController.offset)) < _this.$window.innerHeight) {
	                if (_this.entries[key]) {
	                    _this.entries[key].isVisible = true;
	                    if (key + 1 === _this.entries.length) {
	                        _this.container.off('scroll');
	                    }
	                }
	            }
	        });
	    };
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
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" id=\"cv-timeline-container\">\n  <div class=\"row\">\n    <div class=\"timeline-centered\" ng-class=\"vm.getClass()\">\n      <timeline-entry ng-repeat=\"entry in vm.entries\"\n                      entry=\"entry\"\n                      person-object=\"vm.personData\"\n                      is-left=\"$odd\"></timeline-entry>\n      <article class=\"timeline-entry begin\">\n\n        <div class=\"timeline-end\">\n\n          <div class=\"arrow-down\"></div>\n\n        </div>\n\n      </article>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var timelineEntryController_1 = __webpack_require__(31);
	var TimelineEntryComponent = (function () {
	    function TimelineEntryComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(32);
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
/* 31 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var TimelineEntryController = (function () {
	    /* @ngInject */
	    function TimelineEntryController($window) {
	        this.$window = $window;
	    }
	    TimelineEntryController.$inject = ["$window"];
	    TimelineEntryController.prototype.getCurrentClasses = function () {
	        return {
	            'left-aligned': this.isLeft && this.$window.innerWidth > 960
	        };
	    };
	    TimelineEntryController.prototype.bounce = function () {
	        return {
	            'is-hidden': !this.entry.isVisible,
	            'bounce-in': this.entry.isVisible
	        };
	    };
	    return TimelineEntryController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TimelineEntryController;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<article class=\"timeline-entry\" ng-class=\"vm.getCurrentClasses()\">\n\n  <div class=\"timeline-entry-inner\">\n    <time class=\"timeline-time\" datetime=\"{{vm.entry.timeObject.format('YYYY-MM-DD')}}\"><span>{{vm.entry.timeObject.format('DD.MM.YYYY')}}</span>\n      <span class=\"cv-time\">{{vm.entry.getTime()}}</span></time>\n    <div class=\"timeline-icon {{vm.entry['color-class']}}\" ng-click=\"vm.entry.isVisible = !vm.entry.isVisible\">\n      <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n        <md-icon>{{vm.entry.icon}}</md-icon>\n      </md-button>\n    </div>\n\n    <div class=\"timeline-label\" ng-class=\"vm.bounce()\">\n      <h2>{{vm.personObject.name}} {{vm.personObject.surName}} <span> {{vm.entry.title}}</span></h2>\n      <p>{{vm.entry.text}}</p>\n    </div>\n  </div>\n\n</article>\n"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../tsd.d.ts"/>
	var contactsComponent_1 = __webpack_require__(34);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('contacts', new contactsComponent_1.default);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var contactsController_1 = __webpack_require__(35);
	var ContactsComponent = (function () {
	    function ContactsComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(36);
	        this.controller = contactsController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {};
	    }
	    return ContactsComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContactsComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var ContactsController = (function () {
	    /* @ngInject */
	    function ContactsController(contactLoader, $window) {
	        var _this = this;
	        this.contactLoader = contactLoader;
	        this.$window = $window;
	        var contacts = this.contactLoader.getContactData();
	        if (contacts.hasOwnProperty('$$state')) {
	            contacts.then(function (contactsData) {
	                _this.contactsData = contactsData;
	            });
	        }
	    }
	    ContactsController.$inject = ["contactLoader", "$window"];
	    ContactsController.prototype.contactClicked = function (contact) {
	        if (contact.hasOwnProperty('link')) {
	            this.$window.location.href = contact.link;
	        }
	    };
	    return ContactsController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContactsController;


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<md-icon ng-repeat=\"contact in vm.contactsData\"\n         md-svg-src=\"{{contact.iconSrc}}\"\n         aria-label=\"{{contact.title}}\"\n         ng-click=\"vm.contactClicked(contact)\"\n         class=\"cv-contact {{contact.class}}\"\n></md-icon>\n"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../tsd.d.ts"/>
	var basicGraphDirective_1 = __webpack_require__(38);
	var workTileComponent_1 = __webpack_require__(40);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.directive('basicGraph', basicGraphDirective_1.default.Factory());
	    module.component('workTile', new workTileComponent_1.default);
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var basicGraphController_1 = __webpack_require__(39);
	var BasicGraphDirective = (function () {
	    function BasicGraphDirective() {
	        this.replace = true;
	        this.template = "<div></div>";
	        this.controller = basicGraphController_1.default;
	        this.controllerAs = 'vm';
	        this.scope = {};
	        this.bindToController = {
	            type: '=',
	            data: '=',
	            colors: '=',
	            names: '='
	        };
	        this.link = function (scope, element, attrs, controller) {
	            scope.$watch(function () {
	                return controller.data;
	            }, function (newData) {
	                if (controller.data) {
	                    setTimeout(function () {
	                        scope.chart = c3.generate({
	                            bindto: element[0],
	                            data: {
	                                names: controller.names,
	                                colors: controller.colors,
	                                type: controller.type,
	                                columns: controller.data
	                            }
	                        });
	                    });
	                }
	            });
	            scope.$watch(function () {
	                return controller.type;
	            }, function (newData) {
	                if (scope.chart) {
	                    scope.chart.transform(controller.type);
	                }
	            });
	            //console.log(element);
	        };
	    }
	    BasicGraphDirective.Factory = function () {
	        var directive = function () { return new BasicGraphDirective(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return BasicGraphDirective;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicGraphDirective;


/***/ },
/* 39 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var BasicGraphController = (function () {
	    function BasicGraphController() {
	    }
	    return BasicGraphController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BasicGraphController;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var workTileController_1 = __webpack_require__(41);
	var WorkTileComponent = (function () {
	    function WorkTileComponent() {
	        this.replace = true;
	        this.template = __webpack_require__(42);
	        this.controller = workTileController_1.default;
	        this.controllerAs = 'vm';
	        this.bindings = {};
	    }
	    return WorkTileComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WorkTileComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	///<reference path="../../tsd.d.ts"/>
	"use strict";
	var WorkTileController = (function () {
	    /* @ngInject */
	    function WorkTileController(jobsLoader) {
	        var _this = this;
	        this.jobsLoader = jobsLoader;
	        this.availableGraphs = [
	            { icon: 'donut_large', type: 'donut', title: 'Donut chart' },
	            { icon: 'pie_chart', type: 'pie', title: 'Pie chart' },
	            { icon: 'equalizer', type: 'bar', title: 'Bar chart' }
	        ];
	        this.speedDialItems = [];
	        this.initSpeedDial();
	        var jobsData = this.jobsLoader.getJobsData();
	        if (jobsData.hasOwnProperty('$$state')) {
	            jobsData.then(function (workData) {
	                _this.workData = workData;
	                _this.workData.graphData.type = _this.availableGraphs[0].type;
	            });
	        }
	    }
	    WorkTileController.$inject = ["jobsLoader"];
	    WorkTileController.prototype.initSpeedDial = function () {
	        var _this = this;
	        angular.forEach(this.availableGraphs, function (oneGraph) {
	            _this.speedDialItems.push({
	                tooltip: oneGraph.title,
	                tooltipDirection: 'top',
	                icon: oneGraph.icon,
	                type: oneGraph.type
	            });
	        });
	    };
	    WorkTileController.prototype.onSpeedDialClick = function (item) {
	        this.workData.graphData.type = item.type;
	    };
	    return WorkTileController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WorkTileController;


/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<md-card>\n  <md-card-title>\n    <md-card-title-text>\n      <span class=\"md-headline\">Months per each job</span>\n    </md-card-title-text>\n  </md-card-title>\n  <md-card-content layout=\"row\" layout-align=\"space-between\">\n    <div class=\"card-media cv-graph\">\n      <basic-graph type=\"vm.workData.graphData.type\"\n                   data=\"vm.workData.graphData.data\"\n                   colors=\"vm.workData.graphData.colors\"\n                   names=\"vm.workData.graphData.names\" id=\"work\">\n      </basic-graph>\n    </div>\n    <md-card-actions layout=\"column\">\n      <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n        <md-icon>mode_comment</md-icon>\n      </md-button>\n      <speed-dial items=\"vm.speedDialItems\" direction=\"'down'\" on-click=\"vm.onSpeedDialClick(item)\"></speed-dial>\n    </md-card-actions>\n  </md-card-content>\n</md-card>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=karel-hala-cv.js.map
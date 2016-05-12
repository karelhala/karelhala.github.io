///<reference path="tsd.d.ts"/>
import routeConfig from './config/routeConfig';
import services from './services/loader';
import controllers from './controllers/loader';

let app = angular.module('karelHalaCV', ['ngMaterial', 'ngMdIcons', 'ui.router']);
routeConfig(app);
services(app);
controllers(app);

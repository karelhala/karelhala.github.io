///<reference path="../tsd.d.ts"/>
import BasicInformationLoader from './basicInformationLoader';

export default (module: ng.IModule) => {
  module.service('basicInformationLoader', BasicInformationLoader);
}

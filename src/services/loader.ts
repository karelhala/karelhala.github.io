///<reference path="../tsd.d.ts"/>
import BasicInformationLoader from './basicInformationLoader';
import TimelineLoader from './timelineLoader';

export default (module: ng.IModule) => {
  module.service('basicInformationLoader', BasicInformationLoader);
  module.service('timelineLoader', TimelineLoader);
}

///<reference path="../tsd.d.ts"/>
import BasicInformationLoader from './basicInformationLoader';
import TimelineLoader from './timelineLoader';
import ContactLoader from './contactLoader';

export default (module: ng.IModule) => {
  module.service('basicInformationLoader', BasicInformationLoader);
  module.service('timelineLoader', TimelineLoader);
  module.service('contactLoader', ContactLoader);
}

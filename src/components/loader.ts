///<reference path="../tsd.d.ts"/>
import toolbar from './toolbar/loader';
import timeline from './timeline/loader';

export default (module: ng.IModule) => {
  toolbar(module);
  timeline(module);
}

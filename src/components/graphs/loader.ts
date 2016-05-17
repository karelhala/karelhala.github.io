///<reference path="../../tsd.d.ts"/>
import BasicGraphDirective from './basicGraphDirective';
import WorkTileComponent from './workTileComponent';

export default (module: ng.IModule) => {
  module.directive('basicGraph', BasicGraphDirective.Factory());
  module.component('workTile', new WorkTileComponent);
}

///<reference path="../../tsd.d.ts"/>

import WorkTileController from './workTileController';

export default class WorkTileComponent implements ng.IComponentOptions {
  public replace: boolean = true;
  public template = require<string>('./work-tile.html');
  public controller = WorkTileController;
  public controllerAs: string = 'vm';
  public bindings: any = {
  };
}

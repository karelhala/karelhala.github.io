///<reference path="../../tsd.d.ts"/>

export default class SpeedDialController implements ng.IComponentOptions {
  public isOpen: boolean = false;
  public selectedMode: string = 'md-scale';
  public direction: string = 'down';
}

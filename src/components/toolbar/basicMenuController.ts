///<reference path="../../tsd.d.ts"/>

export default class BasicMenuController implements ng.IComponentOptions {
  public personObject: any;
  constructor(){console.log(this);}

  public openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }
}

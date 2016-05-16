///<reference path="../../tsd.d.ts"/>

export default class SpeedDialController implements ng.IComponentOptions {
  public isOpen: boolean = false;
  public selectedMode: string = 'md-scale';
  public direction: string = 'down';
  private container: any;

  private duration = 2000;

  /* @ngInject */
  constructor(private $window: any) {
    this.container = angular.element(document.getElementById('content-container'));
  }

  public scrollToElement(elementId: string) {
    let element = angular.element(document.getElementById(elementId));
    this.container.scrollToElementAnimated(element, 0, 400);
  }
}

///<reference path="../../tsd.d.ts"/>

export default class SpeedDialController implements ng.IComponentOptions {
  public isOpen: boolean = false;
  public selectedMode: string = 'md-scale';
  public direction: string = 'down';

  private duration = 2000;

  /* @ngInject */
  constructor(private $document: any){}

  public scrollToElement(element: string) {
    const offset = 30;
    const someElement = angular.element(document.getElementById(element));
    console.log(this.$document, someElement);
    this.$document.scrollToElement(someElement, offset, this.duration);
  }
}

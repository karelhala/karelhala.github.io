///<reference path="../../tsd.d.ts"/>

export default class TimelineEntryController {
  public isLeft: boolean;
  public personObject: any;
  public entry: any;
  public clicked = false;

  /* @ngInject */
  public constructor(private $window: any) {
    console.log(this);
  }

  public getCurrentClasses() {
    return {
      'left-aligned': this.isLeft
    };
  }

  public bounce() {
    return {
      'is-hidden': !this.clicked,
      'bounce-in': this.clicked
    };
  }
}

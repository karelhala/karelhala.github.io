///<reference path="../../tsd.d.ts"/>

export default class TimelineEntryController {
  public isLeft: boolean;
  public personObject: any;
  public entry: any;

  /* @ngInject */
  public constructor(private $window: any) {
    console.log(this);
  }

  public getLeftAligned() {
    return {
      'left-aligned': this.isLeft
    };
  }
}

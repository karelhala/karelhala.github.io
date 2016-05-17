///<reference path="../../tsd.d.ts"/>

export default class TimelineController {
  public entries: any[];
  public personData: any;
  private container: any;

  constructor(private timelineLoader: any,
              private basicInformationLoader: any,
              private $window: any) {
    let person = this.basicInformationLoader.getPersonObject();
    if (person.hasOwnProperty('$$state')) {
      person.then((personData) => {
        this.personData = personData;
      });
    }
    let timeline = this.timelineLoader.getTimelineData();
    if (timeline.hasOwnProperty('$$state')) {
      timeline.then((timelineData) => {
        this.entries = timelineData;
      });
    }
  }

  public getClass() {
    return {
      'all-right': this.$window.innerWidth < 960
    };
  }
}

///<reference path="../tsd.d.ts"/>
export default class BasicInformationController {
  private personData: any;
  public direction: string = 'down';
  public items: any[];
  public container: any;
  /* @ngInject */
  constructor(private $window: any, private basicInformationLoader: any) {
    this.initSpeedDial();
    this.container = angular.element(document.getElementById('content-container'));
    let person = this.basicInformationLoader.getPersonObject();
    if (person.hasOwnProperty('$$state')) {
      person.then((personData) => {
        this.personData = personData;
      });
    }
  }

  public scrollToElement(item: any) {
    let element = angular.element(document.getElementById(item.scrollTo));
    this.container.scrollToElementAnimated(element, 0, 400);
  }

  private initSpeedDial() {
    this.items = [
      {
        scrollTo: 'timeline-trend',
        tooltip: 'Timeline',
        tooltipDirection: 'right',
        icon: 'device_hub',
      },
      {
        scrollTo: 'work-graphs',
        tooltip: 'Graphs',
        tooltipDirection: 'right',
        icon: 'equalizer',
      },
      {
        scrollTo: 'experience-graphs',
        tooltip: 'Experiences',
        tooltipDirection: 'right',
        icon: 'explore',
      },
      {
        scrollTo: 'contacts',
        tooltip: 'Contacts',
        tooltipDirection: 'right',
        icon: 'contacts',
      }
    ];
  }
}

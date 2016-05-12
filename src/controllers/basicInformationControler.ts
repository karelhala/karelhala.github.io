///<reference path="../tsd.d.ts"/>
export default class BasicInformationController {
  private personData: any;
  /* @ngInject */
  constructor(private basicInformationLoader: any) {
    let person = this.basicInformationLoader.getPersonObject();
    if (person.hasOwnProperty('$$state')) {
      person.then((personData) => {
        this.personData = personData;
      });
    }
    console.log(this);
  }
}

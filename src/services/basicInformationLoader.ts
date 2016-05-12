///<reference path="../tsd.d.ts"/>
import * as moment from 'moment';

export default class BasicInformationLoader {
  private personObject: any = {};

  /* @ngInject */
  constructor(private $http: ng.IHttpService) {
  }

  public getPersonObject(): any {
    if (this.personObject.hasOwnProperty('name')) {
      return this.personObject;
    } else {
      return this.loadPersonPObject().then((personData) => {
        this.fillObject(personData);
        this.personObject = personData;
        return this.personObject;
      });
    }
  }

  private fillObject(personData: any) {
    console.log(moment);
    personData.dateObject = moment(personData.bornTimeStamp);
    personData.getAge = () => {
      personData.diffTime = moment.duration(moment().diff(personData.dateObject));
      return personData.diffTime.asYears();
    };
  }

  private loadPersonPObject(): ng.IPromise<any> {
    return this.$http.get('/data/basic_info.json').then((responseData) => {
      return responseData.data;
    });
  }
}

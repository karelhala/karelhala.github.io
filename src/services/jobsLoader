///<reference path="../tsd.d.ts"/>
import * as moment from 'moment';

export default class JobsLoader {
   private jobsData: any = {};

  /* @ngInject */
  constructor(private $http: ng.IHttpService) {
  }
  
  public getJobsData(): any {
    if (this.jobsData.length > 0) {
      return this.jobsData;
    } else {
      return this.loadJobsObject().then((jobsData) => {
        this.jobsData = jobsData;
        return this.jobsData;
      });
    }
  }
  
  private loadJobsObject(): ng.IPromise<any> {
    return this.$http.get('/data/jobs.json').then((responseData) => {
      return responseData.data;
    });
  }
}

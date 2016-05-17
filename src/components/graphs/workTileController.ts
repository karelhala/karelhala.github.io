///<reference path="../../tsd.d.ts"/>

export default class WorkTileController {
  public graphData: any;
  
  /* @ngInject */
  constructor(private jobsLoader: any) {
    this.graphData = {
      colors: {
        data1: '#cc2424',
        data2: '#fad839',
        data3: '#303641',
      },
      type: 'donut',
      data: [
        ['data1', 40],
        ['data2', 40],
        ['data3', 20],
      ]
    };
  }
}

///<reference path="../../tsd.d.ts"/>

export default class WorkTileController {
  public graphData: any;
  public workData: any;
  public availableGraphs = [
    {icon: 'donut_large', type: 'donut', title: 'Donut chart'},
    {icon: 'pie_chart', type: 'pie', title: 'Pie chart'},
    {icon: 'equalizer', type: 'bar', title: 'Bar chart'}
  ];

  public speedDialItems: any[] = [];
  public speedDialDirection: 'left';
  /* @ngInject */
  constructor(private jobsLoader: any) {
    this.initSpeedDial();
    let jobsData = this.jobsLoader.getJobsData();
    if (jobsData.hasOwnProperty('$$state')) {
      jobsData.then((workData) => {
        this.workData = workData;
        this.workData.graphData.type = this.availableGraphs[0].type;
      });
    }
  }

  private initSpeedDial() {
    angular.forEach(this.availableGraphs, (oneGraph) => {
      this.speedDialItems.push({
        tooltip: oneGraph.title,
        tooltipDirection: 'top',
        icon: oneGraph.icon,
        type: oneGraph.type
      });
    });
  }

  public onSpeedDialClick(item) {
    this.workData.graphData.type = item.type;
  }
}

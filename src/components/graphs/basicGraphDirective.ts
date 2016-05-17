///<reference path="../../tsd.d.ts"/>

import BasicGraphController from './basicGraphController';

export default class BasicGraphDirective implements ng.IDirective {
  public replace: boolean = true;
  public template = `<div></div>`;
  public controller = BasicGraphController;
  public controllerAs: string = 'vm';
  public scope = {};
  public bindToController: any = {
    type: '=',
    data: '=',
    colors: '='
  };

  public link = (scope, element, attrs, controller) => {
    console.log(controller);
    setTimeout(() => {
      let chart1 = c3.generate({
        bindto: element[0],
        data: {
            colors: controller.colors,
            type : controller.type,
            columns: controller.data
        }
      });
    });
    //console.log(element);
  };

  public static Factory = () => {
    let directive = () => new BasicGraphDirective();

    directive.$inject = [];

    return directive;
  };
}

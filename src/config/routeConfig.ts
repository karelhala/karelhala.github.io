///<reference path="../tsd.d.ts"/>

export default (module: ng.IModule) => {
  module
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      views: {
        toolbar: {
          template: require<string>('../views/home_toolbar.html'),
          controller: 'basicInformationController as basic'
        },
        content: {
          template: require<string>('../views/home_content.html')
        }
      }
    });
  })
    .run(($state) => {
      $state.go('home');
    });
}

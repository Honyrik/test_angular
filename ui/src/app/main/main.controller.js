(function() {
  'use strict';

  angular
    .module('ui')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window, $scope, $log, isMobile, $state) {
    var vm = this,
      w = angular.element($window);;
    vm.isMobile = isMobile();
    w.bind('resize', function () {
      var newstate = isMobile();
      if (vm.isMobile != newstate)  {
        vm.isMobile = newstate;
        $state.reload();
      }
    })
  }
})();

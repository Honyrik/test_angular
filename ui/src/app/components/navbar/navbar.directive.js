/**
 *
 */
(function () {
  'use strict';
  angular
    .module('ui')
    .directive('navPanel', navPanel);

  /** @ngInject */
  function navPanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: navPanelController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function navPanelController($scope, namesite) {
      var vm = this,
        originatorEv;
      vm.namesite = namesite;
      vm.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
      };

    }
  }
})();

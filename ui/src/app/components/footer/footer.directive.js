/**
 * Created by sky on 12.04.2016.
 */
(function () {
  'use strict';
  angular
    .module('ui')
    .directive('wlpFooter', wlpFooter);

  /** @ngInject */
  function wlpFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: footerController,
      controllerAs: 'footer',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function footerController($scope, namesite) {
      var vm = this,
        originatorEv;
      vm.namesite = namesite;
    }
  }
})();


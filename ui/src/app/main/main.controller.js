(function() {
  'use strict';

  angular
    .module('ui')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window, $scope, $log, isMobile, $state) {
    var vm = this,
      w = angular.element($window);
    vm.isMobile = isMobile();
    w.bind('resize', function () {
      var newstate = isMobile();
      if (vm.isMobile !== newstate)  {
        vm.isMobile = newstate;
        $state.reload();
      }
    });
    vm.services=[{
      id: 0,
      title: "Администрирование серверов",
      description: "Администрирование серверов Windows, Linux, FreeBSD и сетевого оборудования всех известных производителей. Установка, настройка, сопровождение.",
      url:"it-uslugi-1"
    }, {
      id: 1,
      title: "Администрирование серверов",
      description: "Администрирование серверов Windows, Linux, FreeBSD и сетевого оборудования всех известных производителей. Установка, настройка, сопровождение.",
      url:"it-uslugi-1"
    }, {
      id: 2,
      title: "Администрирование серверов",
      description: "Администрирование серверов Windows, Linux, FreeBSD и сетевого оборудования всех известных производителей. Установка, настройка, сопровождение.",
      url:"it-uslugi-1"
    }

    ];
  }
})();

/**
 * Created by sky on 11.04.2016.
 */
(function() {
  'use strict';
  angular
    .module('ui')
    .directive('sliderImg', sliderImg);

  /** @ngInject */
  function sliderImg() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/slider/sliderImg.html',
      controller: sliderImgController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function sliderImgController($scope) {
      var vm = this;

      vm.headerslides = [{id: 0, src: "assets/images/slide_1.jpg", description: "Обслуживание серверов."},
        {id: 1, src: "assets/images/slide_2.jpg", description: "Монтаж СКС, прокладка компьютерных сетей."},
        {id: 2, src: "assets/images/slide_3.jpg", description: "Удаленная техническая поддержка"},
        {id: 3, src: "assets/images/slide_4.jpg", description: "Оперативное решение проблем"},
        {id: 4, src: "assets/images/slide_5.jpg", description: "Контроль качества выполнения услуг"}
      ];
      vm.options = {
        sourceProp: 'src',
        visible: 5,
        perspective: 35,
        startSlide: 0,
        border: 3,
        dir: 'ltr',
        width: 500,
        height: 340,
        space: 220
      };
    }
  }

})();

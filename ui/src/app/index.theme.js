/**
 * Created by sky on 11.04.2016.
 */
(function() {
  'use strict';

  angular.module('ui')
    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '700'
      })
      .backgroundPalette('blue', {
        'default': '400'
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('purple', {
        'default': '400' // use shade 200 for default, and keep all other shades the same
      });
  });
})();

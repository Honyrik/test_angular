/**
 * Created by sky on 11.04.2016.
 */
(function() {
  'use strict';

  angular.module('ui')
    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan', {
        'default': '800'
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('purple', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });
  });
})();

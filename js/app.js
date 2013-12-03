/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var demandmvc = angular.module('demandmvc', ["xeditable"]);

demandmvc.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

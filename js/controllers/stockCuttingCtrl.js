/*global demandmvc, angular */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
demandmvc.controller('StockCuttingCtrl', function StockCuttingCtrl($scope, StockCutting, StockCuttingData, filterFilter) {
  $scope.cutPatterns = []

  $scope.solve = function () {
    $scope.cutPatterns = StockCutting.solve(StockCuttingData)
  };
});

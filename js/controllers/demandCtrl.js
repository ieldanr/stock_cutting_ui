/*global demandmvc, angular */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
demandmvc.controller('DemandCtrl', function DemandCtrl($scope, StockCuttingData, filterFilter) {
  $scope.demands = StockCuttingData.demands;

  $scope.addDemand = function () {
    var newDemandNumber = $scope.newDemand.number.trim();
    var newDemandWidth = $scope.newDemand.width.trim();
    if (!newDemandNumber.length || !newDemandWidth.length) {
      return;
    }

    StockCuttingData.addDemand({
      number: newDemandNumber,
      width: newDemandWidth
    });

    $scope.newDemand = {
      number: '',
      width: ''
    };
  };

  $scope.removeDemand = function (demand) {
    StockCuttingData.removeDemand(demand);
  };
});

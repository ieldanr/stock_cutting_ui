/*global stockmvc, angular */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
demandmvc.controller('StockCtrl', function StockCtrl($scope, StockCuttingData, filterFilter) {
  $scope.stocks = StockCuttingData.stocks;

  $scope.addStock = function () {
    var newStockNumber = $scope.newStock.number.trim();
    var newStockWidth = $scope.newStock.width.trim();
    if (!newStockNumber.length || !newStockWidth.length) {
      return;
    }

    StockCuttingData.addStock({
      number: newStockNumber,
      width: newStockWidth
    });

    $scope.newStock = {
      number: '',
      width: ''
    };
  };

  $scope.removeStock = function (stock) {
    StockCuttingData.removeStock(stock);
  };
});

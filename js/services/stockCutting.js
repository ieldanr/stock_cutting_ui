demandmvc.factory('StockCutting', function($http){
  var StockCutting = {
    solve: function(stockCuttingData, url) {
      var stocks = stockCuttingData.stocks;
      var stockQuantities = [];
      var stockWidths = [];
      for(i in stocks){
        stockQuantities.push(stocks[i].number);
        stockWidths.push(stocks[i].width);
      }

      var demands = stockCuttingData.demands;
      var demandQuantities = [];
      var demandWidths = [];
      for(i in demands){
        demandQuantities.push(demands[i].number);
        demandWidths.push(demands[i].width);
      }
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(url + '?stockQuantities=' + stockQuantities.join(',') +
        '&stockWidths=' + stockWidths.join(',') +
        '&demandQuantities=' + demandQuantities.join(',') +
        '&demandWidths=' + demandWidths.join(',')).then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    },
    solveBruteForce: function(stockCuttingData) {
      return this.solve(stockCuttingData, '/api/solve')
    },
    solveApprox: function(stockCuttingData) {
      return this.solve(stockCuttingData, '/api/solve_approx')
    }
  };
  return StockCutting;
});
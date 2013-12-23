function StockCutting(){}

StockCutting.prototype.solve = function(stockCuttingData){
  var demands = stockCuttingData.demands;
  var stocks = stockCuttingData.stocks;
  return [
    {
      repetition: 2,
     contents: [1820, 1820, 1820]
    },
    {
      repetition: 3,
      contents: [1380, 2150, 1930]
    },
    {
      repetition:12,
      contents: [1380, 2150, 2050]
    }
  ]
};

demandmvc.service('StockCutting', StockCutting);
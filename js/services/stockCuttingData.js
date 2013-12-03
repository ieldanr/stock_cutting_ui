function StockCuttingData(){
  this.demands = []
  this.stocks = []
}

StockCuttingData.prototype.addDemand = function(demand){
  this.demands.push({
    number: demand.number,
    width: demand.width
  });
};

StockCuttingData.prototype.removeDemand = function(demand){
  this.demands.splice(this.demands.indexOf(demand), 1);
};

StockCuttingData.prototype.addStock = function(stock){
  this.stocks.push({
    number: stock.number,
    width: stock.width
  });
};

StockCuttingData.prototype.removeStock = function(stock){
  this.stocks.splice(this.stocks.indexOf(stock), 1);
};

demandmvc.service('StockCuttingData', StockCuttingData);
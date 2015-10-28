var Ship = (function(){
  function Ship(name,model){
    this.name = name
    this.model = model
    this.getModelStats(model)
  }

  Ship.prototype.getModelStats = function(){
    if (this.model == "Shuttle"){
      this.maxCargo = 100
      this.cargo = {}
      this.maxFuel = 500
      this.fuel = 500
    }
  }

  Ship.prototype.addCargo = function(item, amount){
    if (this.totalCargo() + amount > this.maxCargo){
      throw new Error("ERROR: Tried to add " + amount + " to cargo but cargo is already at " + this.totalCargo() + " and cannot increase beyond " + this.maxCargo)
    }
    else if (this.totalCargo() + amount < 0){
      throw new Error("ERROR: Tried to remove more cargo than you have!")
    }
    else {
      if (this.cargo[item] == undefined && amount<0){
        throw new Error("ERROR: You cannot sell an item that you have none of!")
      }
      else if (this.cargo[item]+amount < 0){
        throw new Error("ERROR: You cannot sell "+Math.abs(amount)+" of "+item+" when you only have "+this.cargo[item]+"!")
      }
      else if (this.cargo[item] == undefined) this.cargo[item] = amount
      else this.cargo[item] += amount
    }
  }

  Ship.prototype.totalCargo = function(){
    total = 0
    for (var key in this.cargo){
      total += this.cargo[key]
    }
    return total
  }

  Ship.prototype.addFuel = function(amount){
    if (this.fuel + amount > this.maxFuel){
      throw new Error("ERROR: Tried to add "+amount+" to current fuel of "+this.fuel+" but max fuel is "+this.maxFuel)
    }
    else if (this.fuel + amount < 0){
      throw new Error("ERROR: Tried to remove more fuel than you have!")
    }
    else this.fuel += amount
  }

  return Ship
})()

// module.exports = Ship

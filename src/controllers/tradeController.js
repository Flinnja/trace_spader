function buy(item,amount,price){
  if(currentChar.bucks-price*amount < 0){
    throw new Error("ERROR: You cannot afford "+amount+" of "+item+"!")
  }
  else{
    if(item == "fuel"){
      currentChar.ship.addFuel(amount)
      currentChar.bucks -= price*amount
    }
    else{
      currentChar.ship.addCargo(item, amount)
      currentChar.bucks -= price*amount
    }
    refreshDisplayStats()
  }
}

function sell(item,amount,price){
  if(item == "fuel"){
    currentChar.ship.addFuel(amount*-1)
    currentChar.bucks += price*amount
  }
  else{
    currentChar.ship.addCargo(item, amount*-1)
    currentChar.bucks += price*amount
  }
  refreshDisplayStats()
}

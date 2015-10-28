var Character = (function(){
  function Character(userId){
    this.userId = userId
    this.callsign = 'new character'
    this.bucks = 50
    this.location = {planet: "Earth", port: "Wellington"}
    this.ship = null
  }

  Character.prototype.setShip = function(ship){
    if (this.ship != null){
      throw new Error("ERROR: You tried to add a new ship but character "+this.name+"already has a ship named "+this.ship.name)
    }
    else this.ship = ship
  }

  return Character
})()

// module.exports = Character


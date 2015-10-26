var Character = (function(){
  function Character(callsign){
    this.callsign = callsign
    this.bucks = 5
    this.location = {planet: "rock", port: "station one"}
    this.ship = "Shuttle"
  }

  return Character
})()

module.exports = Character


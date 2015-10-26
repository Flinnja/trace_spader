var chai = require('chai')
var expect = chai.expect

var Ship = require('../src/ship.js')

describe("Ship", function(){
  beforeEach(function(){
    this.testShip = new Ship("ZoomZoom","Shuttle")
  })

  describe("basics",function(){
    it("has a model", function(){
      expect(this.testShip.model).to.not.equal(null)
    })
    it("has a name", function(){
      expect(this.testShip.name).to.not.equal(null)
    })
  })

  describe("cargo",function(){
    it("has the correct amount of max cargo", function(){
      expect(this.testShip.maxCargo).to.equal(100)
    })
    it("can add items to cargo", function(){
      this.testShip.addCargo("water",50)
      this.testShip.addCargo("water",40)
      expect(this.testShip.cargo.water).to.equal(90)
    })
    it("cannot take cargo beyond it's max cargo",function(){
      this.testShip.addCargo("water",90)
      expect(function(){
        this.testShip.addCargo("chips",20)
      }.bind(this)).to.throw("ERROR")
    })
  })

  describe("fuel", function(){
    it("has the correct amount of fuel", function(){
      expect(this.testShip.fuel).to.equal(500)
    })
    it("cannot add fuel past max fuel allowance", function(){
      expect(function(){
        this.testShip.addFuel(1)
      }.bind(this)).to.throw("ERROR")
    })
  })
})

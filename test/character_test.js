var chai = require('chai')
var expect = chai.expect

var Character = require('../src/models/character.js')
var Ship = require('../src/models/ship.js')

describe('Character', function(){
  before(function(){
    this.testChar = new Character("Trace")
    this.testShip = new Ship("ZoomZoom","Shuttle")
    this.ship2 = new Ship("BroomBroom","Shuttle")
  })

  it('has a callsign as a string', function(){
    expect(this.testChar.callsign).to.be.a('string')
  })

  it('has an amount of spacebucks as an int', function(){
    expect(this.testChar.bucks).to.be.a('number')
  })

  it('has a current location as an object', function(){
    expect(this.testChar.location).to.be.a('object')
  })

  it('can be given a current ship as a ship', function(){
    this.testChar.setShip(this.testShip)
    expect(this.testChar.ship).to.be.an.instanceOf(Ship)
  })

  it('cannot be given a ship if already owner of a ship', function(){
    expect(function(){
      this.testChar.setShip(this.ship2)
    }.bind(this)).to.throw("ERROR")
  })
})

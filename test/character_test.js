var chai = require('chai')
var expect = chai.expect

var Character = require('../src/character.js')

describe('Character', function(){
  before(function(){
    this.testChar = new Character("Trace")
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

  it('has a current ship as a string', function(){
    expect(this.testChar.ship).to.be.a('string')
  })
})

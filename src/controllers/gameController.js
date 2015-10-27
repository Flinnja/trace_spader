function setupGameListeners(){
  $('.create-char').click(function(){
    currentChar.callsign = $('.callsign-input').val()
    currentChar.ship = new Ship($('.shipName-input').val(),"Shuttle")
    closeWindow('.new-char')
    setupGameScreen()
  })
}

// function checkUserExists(){
//   charDb = new Firebase('https://trace-spader.firebaseio.com/characters')
//   console.log(userData.uid)
//   charDb.once('value', function(snapshot){
//     console.log('in here')
//     if (snapshot.hasChild(userData.uid)){
//       console.log("character exists")
//     }
//     else createNewChar()
//   })
// }

function createNewChar(){
  openWindow('.new-char','18%','16%')
  currentChar = new Character(userData.uid)
}

function setupGameScreen(){
  openWindow('.char-screen','29%','85%')
  openWindow('.map-screen',"69%","85%")
  displayCharStats()
  displayShipStats()
}

function displayCharStats(){
  $('.char-callsign').text("Callsign: "+currentChar.callsign)
  $('.char-bucks').text("SpaceBucks: "+currentChar.bucks)
  $('.char-planet').text("On Planet: "+currentChar.location.planet)
  $('.char-port').text("At Port: "+currentChar.location.port)
}

function displayShipStats(){
  $('.ship-name').text("Name: "+currentChar.ship.name)
  $('.ship-model').text("Model: "+currentChar.ship.model)
  $('.ship-fuel').text("Fuel: "+currentChar.ship.fuel+"/"+currentChar.ship.maxFuel)
  $('.ship-cargo').text("Cargo: "+currentChar.ship.totalCargo()+"/"+currentChar.ship.maxCargo)
}

function openWindow(element, wide, tall){
  $(element).css('visibility', 'visible')
  $(element).animate({
    height: tall,
    width: wide
  }, 50, function(){})
}

function closeWindow(element){
  $(element).animate({
    height: "0px",
    width: "0px"
  }, 50, function(){
    $(element).css('visibility', 'hidden')
  })
}

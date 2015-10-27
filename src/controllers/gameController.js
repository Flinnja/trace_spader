function setupGameListeners(){
  $('.create-char').click(function(){
    currentChar.callsign = $('.callsign-input').val()
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

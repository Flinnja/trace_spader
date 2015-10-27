function setupEventListeners(){

}

function checkUserExists(){
  charDb = new Firebase('https://trace-spader.firebaseio.com/characters')
  console.log(userData.uid)
  charDb.once('value', function(snapshot){
    console.log('in here')
    if (snapshot.hasChild(userData.uid)){
      console.log("character exists")
    }
    else createNewChar()
  })
}

function createNewChar(){
  openWindow($('.new-char'))
  console.log("making new char")

}

function openWindow(element){
  element.css('visibility', 'visible')
  element.animate({
    height: "15%",
    width: "20%"
  }, 50, function(){})
}

function closeWindow(element){
  element.animate({
    height: "0px",
    width: "0px"
  }, 50, function(){
    element.css('visibility', 'hidden')
  })
}

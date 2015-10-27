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
  console.log("making new char")

}

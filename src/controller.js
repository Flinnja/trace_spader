function setupEventListeners(){
  var ref = new Firebase("https://trace-spader.firebaseio.com")

  $(".login").click(function(){
    ref.authWithOAuthPopup("google", authHandler, {remember: 'sessiononly', scope:'email'})
  })

  $(".logout").click(function(){
    console.log("logging out")
    ref.unauth();
    userData = null
    displayLoggedIn()
  })
}

function authHandler(error, authData){
  if(error) console.log("Login failed!", error)
  else if(authData){
    userData = authData
    console.log("Authenticated successfully with payload: ", authData)
    displayLoggedIn()
  }
}

function displayLoggedIn(){
  if (userData){
    $(".login-confirm").text('You have logged in as '+userData.google.email)
  }
  else{
    $(".login-confirm").text('You are not logged in')
  }
}

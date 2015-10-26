function setupEventListeners(){
  var ref = new Firebase("https://trace-spader.firebaseio.com")

  $(".login").click(function(){
    ref.authWithOAuthPopup("google", authHandler, {remember: 'sessiononly', scope:'email'})
  })

  $(".logout").click(function(){
    console.log("logging out")
    ref.unauth();
    $(".login-confirm").text('You have logged out')
  })
}

function authHandler(error, authData){
  if(error) console.log("Login failed!", error)
  else if(authData){
    console.log("Authenticated successfully with payload: ", authData)
    $(".login-confirm").text('You have logged in as '+authData.google.email)
  }
}

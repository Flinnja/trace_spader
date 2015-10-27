function setupEventListeners(){
  $(".login").click(function(){
    ref.authWithOAuthPopup("google", authHandler, {remember: 'sessiononly', scope:'email'})
  })

  $(".logout").click(function(){
    ref.unauth();
    userData = null
  })

  ref.onAuth(function(authData){
    userData = authData
    displayLoggedIn()
    //do login stuff
  })
}

function authHandler(error, authData){
  if(error) console.log("Login failed!", error)
  else if(authData){
    userData = authData
    console.log("Authenticated successfully with payload: ", authData)
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

//display welcome page
//check for chara

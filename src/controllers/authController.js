function setupAuthListeners(){
  $(".login").click(function(){
    ref.authWithOAuthPopup("google", authHandler, {remember: 'sessiononly', scope:'email'})
    $('.login').hide()
    $('.logout').show()
  })

  $(".logout").click(function(){
    ref.unauth();
    $('.logout').hide()
    $('.login').show()
    userData = null
    currentChar = null
  })

  ref.onAuth(function(authData){
    userData = authData
    displayLoggedIn()
    if(userData){
      $('.login').hide()
      $('.logout').show()
    }
    else if(!userData){
      $('.logout').hide()
      $('.login').show()
    }
    if(currentChar == null && userData != null){
      createNewChar()
    }
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

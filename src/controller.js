function setupEventListeners(){

  $(".login").click(function(){
    // var ref = new Firebase("https://trace-spader.firebaseio.com")
    // ref.authWithOAuthPopup("google", function(error, authData) {
    //   if (error) {
    //     if (error.code === "TRANSPORT_UNAVAILABLE"){
    //       ref.authWithOAuthRedirect("google", function(error){
    //         if(error) console.log("Login Failed!", error)
    //       })
    //     }
    //     else console.log("Login Failed!", error)
    //   }
    //   else if(authData){
    //   console.log("Authenticated successfully with payload:", authData)
    //   }
    // })
    var ref = new Firebase("https://trace-spader.firebaseio.com");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    })
  })

}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("log").style.display="block";
 	  //document.getElementById("disp").style.display="none"; 
 document.alert("sucess"); 
  } else {
    // No user is signed in.
    document.getElementById("log").style.display="none";
      //document.getElementById("disp").style.display="block";
      document.alert("fail");
}
});


function login(){
	var email= document.getElementById("username").value;
	var pass= document.getElementById("password").value;
firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("error" + errorMessage);
});
}
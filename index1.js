$(document).ready(function(){

var rootref= firebase.database().ref().child("questions");
  rootref.on("child_added",snap =>{
    //alert(snap.val());
    var answer=snap.child("answer1").val();
    //alert(answer);
    //var a=String(answer).split(" ");
    //a=a.split(" ");
//document.writeln(typeof (a));
    document.writeln(answer[0]);        
    
});
});
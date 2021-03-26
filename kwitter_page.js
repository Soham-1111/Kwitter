//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBdH4luQd5Y-r64J1mhQb_G5lpe8Thnvcg",
    authDomain: "kwitter-project-f63b3.firebaseapp.com",
    databaseURL: "https://kwitter-project-f63b3-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f63b3",
    storageBucket: "kwitter-project-f63b3.appspot.com",
    messagingSenderId: "623500716430",
    appId: "1:623500716430:web:7390672431d59e9f129cdf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

  function send(){
        msg= document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              message:msg,
              name: user_name,
              likes:0

        });
    }

        document.getElementById("msg").value= "";

        function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
 
 //Start code
 console.log(firebase_message_id);
 console.log(message_data);
 
 name= message_data['name'];
 like= message_data['likes'];
 message= message_data['message'];
 
 name_tag= "<h4>" + name + "<img src='tick.png' class='user_tick'>"  + "</h4>";
 message= "<h4 class='message_h4'>" + message + "</h4>";
 button_like= "<button class='btn btn-danger' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)' >" ;
 thumbs_up= "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button> <hr>";
 
 row= name_tag + message + button_like + thumbs_up;
 document.getElementById("output").innerHTML += row;
 //End code
       } });  }); }
 getData();
 
 function updateLike(message_id){
 console.log("message id-" + message_id );
 button_id= message_id;
 likes= document.getElementById(button_id).value;
 updated_likes= Number(likes) +1;
 console.log(updated_likes);
 firebase.database().ref(room_name).child(message_id).update({
       likes: updated_likes
 
 });
 
 }
 
 
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location= "index.html";
 }
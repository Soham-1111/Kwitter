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
document.getElementById("welcome").innerHTML= "Welcome " + user_name + "!";

function addroomname(){
      room_name= document.getElementById("roomname").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
        user : "adding room name"
    });
    window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start code
 console.log(Room_names);
 row= "<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'> #"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

 //End code
 });});}
getData();

function redirect(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";
}
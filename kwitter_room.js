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
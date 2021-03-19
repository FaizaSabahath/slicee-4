 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCZAfIWmFnDI15NwRwgRkDcdTaZodnplac",
    authDomain: "slicee-e8392.firebaseapp.com",
    databaseURL: "https://slicee-e8392-default-rtdb.firebaseio.com",
    projectId: "slicee-e8392",
    storageBucket: "slicee-e8392.appspot.com",
    messagingSenderId: "238112784039",
    appId: "1:238112784039:web:ab7d273b1ab9c8767a6582"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("message").value; 
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("message").innerHTML = " ";
}
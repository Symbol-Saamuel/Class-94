var firebaseConfig = {
    apiKey: "AIzaSyAa73Y-3k6CrZjTJi6N77wRMGc4suT4Od4",
    authDomain: "class-test-72d00.firebaseapp.com",
    databaseURL: "https://class-test-72d00-default-rtdb.firebaseio.com",
    projectId: "class-test-72d00",
    storageBucket: "class-test-72d00.appspot.com",
    messagingSenderId: "69027156937",
    appId: "1:69027156937:web:d91231cb55a573102fce18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser()
      {
        user_name = document.getElementById("User_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
        });
      }
  
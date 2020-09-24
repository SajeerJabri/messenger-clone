import React, { createContext, useState } from "react";
import { db } from "../config/config";
import firebase from "firebase";

export const ContextProvider = createContext();

const ContextFunc = ({ children }) => {
    const [user, setUser] = useState(null);
  var provider = new firebase.auth.GoogleAuthProvider();

  // google signIn function
  const googleSignin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        setUser(user)

        console.log("token", token);
        console.log("user", user);
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  };

  // google signOut function 
  function googleSignout() {
    firebase.auth().signOut()
     
    .then(function() {
       console.log('Signout Succesfull')
       setUser(null)
    }, function(error) {
       console.log('Signout Failed')  
    });
 } 

 // store messages in firestore
 
    const sendMessage = (msg) => {
        db.collection("messages").add({
          msg,
          userId: user.uid,
          photo: user.photoURL,
          username: user.displayName,
          email: user.email,
          currentTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
      };



  return (
    <ContextProvider.Provider value={{ googleSignin, user, googleSignout, sendMessage }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextFunc;

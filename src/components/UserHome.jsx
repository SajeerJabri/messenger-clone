import React, { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { db } from "../config/config";

const UserHome = () => {
  const { user, sendMessage } = useContext(ContextProvider);
  const [input, setInput] = useState("");
  const [allMsg, setAllMsg] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };
  useEffect(() => {
    // Fetch message from firestore
    db.collection("messages")
      .orderBy("currentTime", "desc")
      .onSnapshot(snp => {
        console.log("all message", snp.docs);
        setAllMsg(
          snp.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        );
      });
  }, []);
  console.log(allMsg);
  let nameVal = "";
  let photoVal = "";

  allMsg.map(msg => {
    if (user.uid !== msg.userId) {
      nameVal = msg.username;
      photoVal = msg.photo;
    } else {
      console.log(nameVal);
    }
    return [nameVal, photoVal]
  });

  console.log(nameVal);
  return (
    <div className="user__home">
      <div className="user__home_container">
        <div className="user__home_container_logo">
          <div className="user__home_logo">
            <img src="messenger.png" alt="logo" />
          </div>
          <div className="user__home_logo_title">Messenger</div>
        </div>
        <div className="user__home_container_row">
          <div className="user__home_img">
            <img src={photoVal} alt="logo" />
          </div>

          <div className="user__home_title">{nameVal}</div>
        </div>

        <div className="user_messages">
          {!allMsg ? (
            <h1>Loading...</h1>
          ) : (
            allMsg.map((message, index) =>
              user.uid === message.userId ? (
                <div className="user__messages_me" key={index}>
                  <div className="user__home_info_me">
                    <img src={message.photo} alt="userImage" />
                    <span>{message.username}</span>
                  </div>
                  <p>{message.msg}</p>
                </div>
              ) : (
                <div className="user__messages_other">
                  <div className="user__home_info_other">
                    <img src={message.photo} alt="userImage" />
                    <span>{message.username}</span>
                  </div>
                  <p>{message.msg}</p>
                </div>
              )
            )
          )}
        </div>

        <div className="user__message_type">
          <form className="user_message_form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type Message ..."
              className="user_message_input"
              onChange={e => setInput(e.target.value)}
              value={input}
              required
            />
            <input type="submit" value="Send" className="user__message_btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

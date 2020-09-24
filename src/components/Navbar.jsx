import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

const Navbar = () => {
  const { googleSignin, user, googleSignout } = useContext(ContextProvider);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container_logo">Messenger</div>
        <div className="navbar__container_btn">
          {user ? (
            <div className="navbar__header_signout">
              <div className="navbar__header_user">
                <img
                  src={user.photoURL}
                  alt="user"
                  className="navbar__user_logo"
                />
                <span className="navbar__user_name">{user.displayName}</span>
              </div>
              <button
                onClick={googleSignout}
                className="navbar__user_signout_btn"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button onClick={googleSignin} className="navbar__user_signin_btn">
              Register Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

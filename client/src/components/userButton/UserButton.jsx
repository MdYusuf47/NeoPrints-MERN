import React, { useState } from "react";
import "./UserButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <a href="/" className="userOption">
            Profile
          </a>
          <a href="/" className="userOption">
            Settings
          </a>
          <a href="/" className="userOption">
            Logout
          </a>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign up
    </a>
  );
};

export default UserButton;

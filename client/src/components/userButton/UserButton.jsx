import React, { useState } from "react";
import "./UserButton.css";
import Image from "../image/Image";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <Image
        path="/general/arrow.svg"
        onClick={() => setOpen((prev) => !prev)}
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

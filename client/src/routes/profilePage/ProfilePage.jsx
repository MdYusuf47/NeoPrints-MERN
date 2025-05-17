import React, { useState } from "react";
import "./ProfilePage.css";
import Image from "../../components/image/Image";
import Collections from "../../components/collections/Collections";
import Gallery from "../../components/gallery/Gallery";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import apiRequest from "../../utils/apiRequest";

const ProfilePage = () => {
  const [type, setType] = useState("Saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";


  return (
    <div className="profilePage">
      <Image className="profileImg" path="/general/noAvatar.png" alt="" />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@john Doe</span>
      <div className="followCounts">10 followers . 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;

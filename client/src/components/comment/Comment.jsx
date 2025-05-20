import React, { useState } from "react";
import "./comment.css";
import Image from "../image/Image";
import EmojiPicker from "emoji-picker-react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import Comments from "./comments";

const Comment = ({ id }) => {
  const [open, setOpen] = useState(false);
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comment/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "data not found!";

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">{data.length === 0 ? "No comments yet" : data.length + "comments"}</span>
        {data.map((comment) => (
          <Comments key={comment._id} comment={comment} />
        ))}
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment..." />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comment;

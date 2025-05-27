import "./comment.css";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const Comment = ({ id }) => {
  
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
        <CommentForm id={id} />
    </div>
  );
};

export default Comment;

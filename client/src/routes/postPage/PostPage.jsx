import "./PostPage.css";
import Image from "../../components/image/Image";
import PostInteractions from "../../components/postInteractions/PostInteractions";
import { Link, useParams } from "react-router";
import Comment from "../../components/comment/Comment";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

const PostPage = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Pin not found!";

  return (
    <div className="postPage">
      <Link to="/">
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="20"
          style={{ cursor: "pointer" }}
        >
          <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
        </svg>
      </Link>
      <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt="" w={726} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to={`/${data.user.username}`} className="postUser">
            <Image src={data.user.img || "/general/noAvatar.png"} />
            <span>{data.user.displayname}</span>
          </Link>
          <Comment id={data._id} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

import PostCardActions from "./PostCardActions";
import PostCardBody from "./PostCardBody";
import PostCardComments from "./PostCardComments";
import PostCardHeader from "./PostCardHeader";

const PostCard = ({post}) => {
  return (
    <article className="card mt-6 lg:mt-8">
      {/* post header */}
     <PostCardHeader post={post}/>
      {/* post body */}
      <PostCardBody content={post?.content} image= {post?.image}/>
      {/* post action like,comment,share */}
      <PostCardActions commentLength={post?.comments.length}/>
      {/* post comments */}
      <PostCardComments comments= {post?.comments}/>
    </article>
  );
};

export default PostCard;


import useProfileContext from "../../hooks/useProfileContext";
import PostCard from "../posts/PostCard";

const ProfilePosts = () => {
  const {state}=  useProfileContext();
  const posts= state?.posts;
  return (
    <div>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      {
        posts.map(post=><PostCard key={post.id} post={post}/>)
      }
    </div>
  );
};

export default ProfilePosts;

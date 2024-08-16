
import PostCardCommentInput from "./PostCardCommentInput";

const PostCardComments = ({comments}) => {
  
  return (
    <div>
      <PostCardCommentInput />
      <div className="mt-4">
        <button className="text-gray-300 max-md:text-sm">All Comment ▾</button>
      </div>
      {/* comments */}
      <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
        {
          comments.map(comment=><div className="flex items-center gap-3 pt-4" key={comment.id + Math.random().toFixed(3)}>
            <img
              className="w-6 h-6 rounded-full object-cover object-center"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${comment?.author?.avatar}`}
              alt="avatar"
            />
            <div>
              <div className="flex gap-1 text-xs lg:text-sm">
                <span>{comment?.author?.name}: </span>
                <span>{comment.comment}</span>
              </div>
            </div>
          </div>)
        }

        
      </div>
    </div>
  );
};

export default PostCardComments;

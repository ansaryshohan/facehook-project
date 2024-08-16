import useProfileContext from "./useProfileContext";


const useAvatar = (post) => {
  const { state } = useProfileContext();

  const isMe = post?.author?.id === state?.profileUser?.id;
  const avatar = isMe ? state?.profileUser?.avatar : post?.author?.avatar;
  const profileUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;
  return { profileUrl };
};

export default useAvatar;

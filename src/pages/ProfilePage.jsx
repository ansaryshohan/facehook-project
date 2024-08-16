import { useEffect } from "react";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfilePosts from "../components/profile/ProfilePosts";
import useProfileContext from "../hooks/useProfileContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAxios } from "../hooks/useAxios";

function ProfilePage() {
  const { state, dispatch } = useProfileContext();
  const { auth } = useAuthContext();
  const { axiosApi } = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: actions.profile.PROFILE_DATA_FETCHING });
        const response = await axiosApi.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth.user.id}`
        );
        // console.log(response.data.posts,response.data.user);
        if (response.status === 200) {
          dispatch({
            type: actions.profile.PROFILE_DATA_FETCHED,
            payload: { user: response.data.user, posts: response.data.posts },
          });
        }
      } catch (err) {
        dispatch({
          type: actions.profile.PROFILE_DATA_FETCHING_ERROR,
          payload: { error: err.message },
        });
      }
    };
    fetchData();
  }, [axiosApi, auth.user.id, dispatch]);

  if (state?.loading) return <div>Data is fetching...</div>;
  if (state?.error) return <div>Error fetching Data...</div>;

  return (
    <div>
      {/* profile info  */}
      <ProfileInfo />
      {/* profile posts */}
      <ProfilePosts />
    </div>
  );
}

export default ProfilePage;

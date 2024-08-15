import { useEffect } from "react";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfilePosts from "../components/profile/ProfilePosts";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAxios } from "../hooks/useAxios";
import useProfileContext from "../hooks/useProfileContext";

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
      {/* divider */}
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      {/* profile posts */}
      <ProfilePosts />
    </div>
  );
}

export default ProfilePage;

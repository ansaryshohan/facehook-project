import { useState } from "react";
import { actions } from "../../actions";
import CloseIcon from "../../assets/icons/close.svg";
import EditIcon from "../../assets/icons/edit.svg";
import { useAxios } from "../../hooks/useAxios";
import useProfileContext from "../../hooks/useProfileContext";

const ProfileBio = () => {
  const { state, dispatch } = useProfileContext();
  const { axiosApi } = useAxios();
  const [bio, setBio] = useState(state?.profileUser?.bio);
  const [editBio, setEditBio] = useState(false);

  const handleEdit = async () => {
    dispatch({ type: actions.profile.PROFILE_DATA_FETCHING });
    try {
      const response = await axiosApi.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state.profileUser.id
        }`,
        { bio }
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.PROFILE_DATA_EDITING,
          payload: response.data,
        });
        setEditBio(false);
      }
    } catch (err) {
      dispatch({
        type: actions.profile.PROFILE_DATA_FETCHING_ERROR,
        payload: { error: err.message },
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editBio ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.profileUser?.bio}
          </p>
        ) : (
          <textarea
            className="leading-[188%] text-gray-400 lg:text-lg"
            value={bio}
            cols={55}
            rows={4}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>

      {!editBio ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditBio(true)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleEdit}
        >
          <img src={CloseIcon} alt="close" />
        </button>
      )}
    </div>
  );
};

export default ProfileBio;

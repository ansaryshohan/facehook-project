import { useRef } from "react";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import { useAxios } from "../../hooks/useAxios";
import useProfileContext from "../../hooks/useProfileContext";

const ProfileImage = () => {
  const { state, dispatch } = useProfileContext();
  const fileUploadRef = useRef();
  const { axiosApi } = useAxios();

  const handleFileSubmit = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
    fileUploadRef.current.addEventListener("change", updateDisplayImage);
  };
  const updateDisplayImage = async () => {
    try {
      const formData = new FormData();
      for (let file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }
      // console.log(formData.get("avatar"));
      const response = await axiosApi.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.profileUser?.id
        }/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.PROFILE_IMAGE_EDITING,
          payload: response?.data?.avatar,
        });
      }
    } catch (err) {
      dispatch({
        type: actions.profile.PROFILE_DATA_FETCHING_ERROR,
        error: err.message,
      });
    }
  };

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="w-[180px] h-[180px] rounded-full object-cover object-center"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
          state?.profileUser?.avatar
        }`}
        alt={`${state?.profileUser?.firstName} ${state?.profileUser?.lastName}`}
      />

      <form onSubmit={handleFileSubmit}>
        <input
          type="file"
          name="avatar"
          id="avatar"
          ref={fileUploadRef}
          hidden
        />
        <button
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          type="submit"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      </form>
    </div>
  );
};

export default ProfileImage;

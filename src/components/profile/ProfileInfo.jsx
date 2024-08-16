
import useProfileContext from "../../hooks/useProfileContext";
import ProfileBio from "./ProfileBio";
import ProfileImage from "./ProfileImage";

const ProfileInfo = () => {
  const { state } = useProfileContext();
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <ProfileImage />
      {/* name and email */}
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.profileUser?.firstName} {state?.profileUser?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{state?.profileUser?.email}</p>
      </div>
      {/* bio section */}
      <ProfileBio />
      {/* divider */}
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
};

export default ProfileInfo;

import { useState } from "react";
import ThreeDotIcon from "../../assets/icons/3dots.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import EditIcon from "../../assets/icons/edit.svg";
import TimeIcon from "../../assets/icons/time.svg";
import useAvatar from "../../hooks/useAvatar";
import getDateDifference from "../../utils/getDateDifference";

const PostCardHeader = ({ post }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const { profileUrl } = useAvatar(post);
  const dateDifference = getDateDifference(post?.createAt);

  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full lg:h-[58px] lg:w-[58px] object-cover object-center"
          src={profileUrl}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{post.author.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {`${dateDifference} ` }ago
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <button onClick={() => setToggleButton((prev) => !prev)}>
          <img src={ThreeDotIcon} alt="3dots of Action" />
        </button>

        {toggleButton && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button className="action-menu-item hover:text-red-500">
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostCardHeader;

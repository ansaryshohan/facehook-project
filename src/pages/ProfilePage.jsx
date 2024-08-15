import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAxios } from "../hooks/useAxios";

function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { auth } = useAuthContext();
  const { axiosApi } = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth.user.id}`
        );
        // console.log(response.data.posts,response.data.user);
        setProfileUser(response.data.user);
        setPosts(response.data.posts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosApi, auth.user.id]);

  if(loading)return <div>Data is fetching...</div>
  if(error)return <div>Error fetching Data...</div>

  return <div>welcome {profileUser?.firstName} {" "} {profileUser?.lastName}
  <p>you have {posts?.length} posts</p>
  </div>;
}

export default ProfilePage;

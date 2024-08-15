import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContextProvider";


const useProfileContext = () => {
  return useContext(ProfileContext); // {state,dispatch}
}

export default useProfileContext
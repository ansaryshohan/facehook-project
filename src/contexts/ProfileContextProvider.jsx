import { createContext, useReducer } from "react";
import { initialState, profileReducer } from "../reducers/profileReducer";

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;

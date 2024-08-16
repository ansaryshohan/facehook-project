import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

export function useAuthContext (){
  return useContext(AuthContext); //{auth,setAuth}
}
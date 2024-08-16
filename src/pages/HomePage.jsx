import { useEffect, useReducer } from "react";
import { initialState, postReducer } from "../reducers/postReducer";
import { useAxios } from "../hooks/useAxios";
import { actions } from "../actions";
import PostCard from "../components/posts/PostCard";

export default function HomePage() {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const {axiosApi}= useAxios();
  

  useEffect(()=>{
    dispatch({type:actions.post.POST_DATA_FETCHING})
    const fetchData= async()=>{
     try {
      const response= await axiosApi.get(`/posts`);
      if(response.status===200){
        dispatch({type:actions.post.POST_DATA_FETCHED,payload:response.data})
      }
     } catch (err) {
      dispatch({type:actions.post.POST_DATA_FETCHING_ERROR,payload:{error:err.message}})
     }
    }
    fetchData()
  },[axiosApi])

  return <>
  {
    state?.posts.map(post=><PostCard key={ post.id} post={post}/>)
  }
  </>;
}

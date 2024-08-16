import { actions } from "../actions";

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case actions.post.POST_DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.post.POST_DATA_FETCHED: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    }
    case actions.post.POST_DATA_FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case actions.post.POST_DATA_EDITING: {
      return {
        ...state,
        loading: false,
        profileUser: action.payload,
      };
    }
    default:
      return state;
  }
};

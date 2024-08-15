import { actions } from "../actions";

export const initialState = {
  profileUser: null,
  posts: [],
  loading: false,
  error: null,
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.PROFILE_DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.profile.PROFILE_DATA_FETCHED: {
      return {
        ...state,
        profileUser: action.payload.user,
        posts: action.payload.posts,
        loading: false,
      };
    }
    case actions.profile.PROFILE_DATA_FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case actions.profile.PROFILE_DATA_EDITING: {
      return {
        ...state,
        loading: false,
        profileUser: action.payload,
      };
    }
    case actions.profile.PROFILE_IMAGE_EDITING: {
      return {
        ...state,
        loading: false,
        profileUser: {
          ...state.profileUser,
          avatar: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

import {
  ADD_DEVELOPERS,
  EDIT_DEVELOPERS,
  DELETE_DEVELOPER,
  GET_DEVELOPER,
  LIST_DEVELOPERS,
} from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEVELOPERS:
      return {
        ...state,
        loading: true,
      };
    case EDIT_DEVELOPERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case DELETE_DEVELOPER:
      return {
        ...state,
        items: state.filter(item => item.id !== action.id),
        error: "",
      };
    case GET_DEVELOPER:
      return {
        ...state,
        loading: false,
        users: {
          ...state.users,
          ...action.payload,
        },
        error: action.error,
      };
    case LIST_DEVELOPERS:
      return {
        ...state,
        loading: false,
        users: {
          ...state.users,
          ...action.payload,
          current: [],
        },
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;

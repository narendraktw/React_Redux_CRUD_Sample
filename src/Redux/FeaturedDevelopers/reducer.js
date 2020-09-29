import {
  ADD_DEVELOPER,
  EDIT_DEVELOPER,
  DELETE_DEVELOPER,
  LIST_DEVELOPERS,
} from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEVELOPER:
      return {
        ...state,
        loading: true,
      };
    case EDIT_DEVELOPER:
      return {
        ...state,
        loading: false,
        users: {
          ...state.users,
          ...action.payload,
        },
        error: action.error,
      };
    case DELETE_DEVELOPER:
      return {
        ...state,
        items: state.filter((item) => item.id !== action.id),
        error: "",
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

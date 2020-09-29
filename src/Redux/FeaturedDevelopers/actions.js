import * as actions from "./actionTypes";
import Api from "../../Helpers/api.js";

const API_LINK = `http://localhost:3000/items`;

const addDeveloper = (data, id) => async (dispatch) => {
  let response;
  try {
    if (id || id === 0) {
      response = await Api.put(`${API_LINK}/${id}`, {
        body: JSON.stringify(data),
      });
    } else {
      response = await Api.post(`${API_LINK}`, { body: JSON.stringify(data) });
    }
    
    if (response?.id) {
      return true;
    }
  } catch (e) {
    dispatch({
      type: actions.ADD_DEVELOPER,
      error: e?.message || "An error occurred!",
    });
  }
};

const editDeveloper = (id) => async (dispatch) => {
  try {
    const current = await Api.get(`${API_LINK}/${id}`);
    if (current) {
      dispatch({
        type: actions.EDIT_DEVELOPER,
        payload: {
          current,
        },
      });

      return;
    }
  } catch (e) {
    dispatch({
      type: actions.EDIT_DEVELOPER,
      error: e?.message || "An error occurred!",
    });
  }
};

const deleteDeveloper = (id) => async (dispatch) => {
  try {
    await Api.delete(`${API_LINK}/${id}`);
  } catch (e) {
    dispatch({
      type: actions.DELETE_DEVELOPER,
      error: e?.message || "An error occurred!",
    });
    return;
  }
  // dispatch(listDevelopers());
};

const listDevelopers = () => async (dispatch) => {
  try {
    const developers = await Api.get(API_LINK);

    if (developers.length || developers.length === 0) {
      dispatch({
        type: actions.LIST_DEVELOPERS,
        payload: {
          developers,
        },
      });

      return;
    }
  } catch (e) {
    dispatch({
      type: actions.LIST_DEVELOPERS,
      error: e?.message || "An error occurred!",
    });
  }
};

export {
  addDeveloper,
  editDeveloper,
  deleteDeveloper,
  listDevelopers
};

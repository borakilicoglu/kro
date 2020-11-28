import axios from "axios";

// Get Initial Tasks
export const getTasks = (routeParams) => {
  return async (dispatch) => {
    await axios
      .get("api/tasks/tasks", {
        params: routeParams,
      })
      .then((result) => {
        dispatch({
          type: "GET_TASKS",
          tasks: result.data,
          routeParams,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const toggleCheckTask = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "TOGGLE_CHECK_TASK",
      id: id,
    });
  };
};

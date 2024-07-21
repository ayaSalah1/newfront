import axios from "axios";
import { FAILED_GET_TASKS, GET_TASKS, START_GET_TASKS } from "../../Types";
import { rootRoute } from "../../../Routes/Root.route";

const GetTasksAction = (values) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + `/api/v1/tasks?page=${values.page}&isDone=false`;
  return async (dispatch) => {
    dispatch({
      type: START_GET_TASKS,
    });
    try {
      const response = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: GET_TASKS,
        payload: {
          data: response.data.data,
          numberOfPages: response.data.paginationResult.numberOfPages,
        },
      });
    } catch (error) {
      dispatch({
        type: FAILED_GET_TASKS,
      });
    }
  };
};

export default GetTasksAction;

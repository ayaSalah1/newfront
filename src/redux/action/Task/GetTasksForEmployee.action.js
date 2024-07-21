import axios from "axios";
import {
  FAILED_GET_TASKS_EMPLOYEE,
  Get_Tasks_Cards,
  START_GET_TASKS_EMPLOYEE,
} from "../../Types";
import { rootRoute } from "../../../Routes/Root.route";

const GetTasksForEmployee = (values) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + `/api/v1/tasks/cards/${user.data._id}`;
  return async (dispatch) => {
    dispatch({
      type: START_GET_TASKS_EMPLOYEE,
    });
    try {
      const response = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: Get_Tasks_Cards,
        payload: {
          data: response.data.data,
        },
      });
    } catch (error) {
      dispatch({
        type: FAILED_GET_TASKS_EMPLOYEE,
      });
    }
  };
};

export default GetTasksForEmployee;

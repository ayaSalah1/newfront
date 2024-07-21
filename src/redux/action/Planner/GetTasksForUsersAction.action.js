import axios from "axios";
import { Get_Tasks_Planner } from "../../Types";
import { rootRoute } from "../../../Routes/Root.route";
import { aleartsToast } from "../../../alearts/alearts";

const GetTasksForUsersAction = (date) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + `/api/v1/planner/${user.data._id}?date=${date}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch({
        type: Get_Tasks_Planner,
        payload: {
          data: response.data.data,
          date: response.data.date,
        },
      });
    } catch (error) {
      aleartsToast("error", error.response.data.message);
    }
  };
};

export default GetTasksForUsersAction;

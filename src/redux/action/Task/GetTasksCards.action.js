import axios from "axios";
import { Get_Tasks_Cards } from "../../Types";
import { rootRoute } from "../../../Routes/Root.route";

const GetTasksCardsAction = (values) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  // const api =rootRoute + `/api/v1/tasks?page=${values.page}&isDone=false`
  const api = rootRoute + `/api/v1/tasks/get/cards`;
  return async (dispatch) => {
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
    } catch (error) {}
  };
};

export default GetTasksCardsAction;

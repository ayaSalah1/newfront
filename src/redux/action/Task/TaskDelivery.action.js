import axios from "axios";
import { Task_Delivery, EDIT_TASK } from "../../Types";
import { aleartsToast } from "../../../utils/alearts/alearts";
import { rootRoute } from "../../../Routes/Root.route";
import socket from "../../../socket";
import { notification } from "antd";

function TaskDeliveryAction(values) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + "/api/v1/tasks/delivery";
  return async (dispatch) => {
      const response = await axios.post(
        api,
        {
          task_id: values._id,
          description: values.description,
          date: new Date(),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.data)
      dispatch({
        type: Task_Delivery,
        payload: response.data.data._id,
      });
      socket.emit("sendNotification", {
        user_id: "64b98bbcc0756851cba6dba0", //TODO replace with Dynamic Admin ID
        type: "alert",
        notification: `Done ${values.description}`,
        createdAt: new Date(),
      });
      aleartsToast("success", "تم تسليم المهمة بنجاح");
  };
}

export default TaskDeliveryAction;

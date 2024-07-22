import axios from "axios";
import {
  DELETE_TASK,
  FAILED_DELETE_TASK,
  START_DELETE_TASK,
} from "../../Types";
import { aleartsToast, deleteAlert } from "../../../utils/alearts/alearts";
import { rootRoute } from "../../../Routes/Root.route";
import socket from "../../../socket";

function ReturnTaskAction(values, task) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + "/api/v1/tasks/return";
  return async (dispatch) => {
    dispatch({
      type: START_DELETE_TASK,
    });
    try {
      const response = await axios.post(
        api,
        {
          id: values.id,
          taskTime: values.taskTime,
          mangerRating:user.data._id,
          returnDescription: values.returnDescription,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch({
        type: DELETE_TASK,
        payload: values.id,
      });
      socket.emit("sendNotification", {
        user_id: task.assignTo._id,
        type: "alert",
        notification: `لقد تم ارجاع مهمة ${task.name} ... التفاصيل ${values.returnDescription}`,
        createdAt: new Date(),
      });
      aleartsToast("success", "تم ارجاع المهمة بنجاح");
    } catch (error) {
      dispatch({
        type: FAILED_DELETE_TASK,
      });
      aleartsToast("error", "خطأ !! لم يتم ارجاع المهمة");
    }
  };
}

export default ReturnTaskAction;

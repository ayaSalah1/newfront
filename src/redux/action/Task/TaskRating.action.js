import axios from "axios";
import { aleartsToast } from "../../../utils/alearts/alearts";
import { rootRoute } from "../../../Routes/Root.route";
import { Task_Delivery, EDIT_TASK } from "../../Types";
function TaskRatingAction(values) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + "/api/v1/tasks/rating";
  return async (dispatch) => {
    console.log(user)
    try {
      const response = await axios.post(
        api,
        {
          task_id: values.task_id,
          mangerRating:user.data._id,
          rating: values.rating,
          descriptionRating: values.descriptionRating
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({
        type: EDIT_TASK,
        payload: response.data.data,
      });
      aleartsToast("success", "تم تقييم المهمة بنجاح");
    } catch (error) {
      aleartsToast("error", "خطأ !! لم يتم تقييم المهمة");
    }
  };
}

export default TaskRatingAction;

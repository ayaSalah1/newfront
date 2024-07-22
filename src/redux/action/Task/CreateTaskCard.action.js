import axios from "axios";
import { CREATE_TASK_Card } from "../../Types";
import { aleartsToast } from "../../../utils/alearts/alearts";
import { rootRoute } from "../../../Routes/Root.route";

function CreateTaskCardAction(values) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + "/api/v1/tasks/cards";
  return async (dispatch) => {
    try {
      const response = await axios.post(
        api,
        {
          name: values.name,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({
        type: CREATE_TASK_Card,
        payload: response.data.data,
      });
      aleartsToast("success", "تم اضافة القائمة بنجاح");
    } catch (error) {
      aleartsToast("error", "خطأ !! لم يتم اضافة القائمة");
    }
  };
}

export default CreateTaskCardAction;

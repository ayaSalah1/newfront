import axios from "axios";
import {
  DELETE_TASK,
  FAILED_DELETE_TASK,
  START_DELETE_TASK,
} from "../../Types";
import { aleartsToast, deleteAlert } from "../../../utils/alearts/alearts";
import { rootRoute } from "../../../Routes/Root.route";

function DeleteCardAction(values) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const api = rootRoute + "/api/v1/tasks/cards/" + values.id;
  return async (dispatch) => {
    try {
      const result = await deleteAlert(
        "هل انت متأكد ؟",
        "تريد الان حذف القائمة",
        "نعم اريد حذف القائمة"
      );
      if (result) {
        const response = await axios.delete(api, {
          headers: { Authorization: `Bearer ${token}` },
        });
        aleartsToast("success", "تم حذف القائنة بنجاح");
      }
    } catch (error) {
      aleartsToast("error", "خطأ !! لم يتم حذف القائمة");
    }
  };
}

export default DeleteCardAction;

import axios from "axios";
import {
    DELETE_TASK, FAILED_DELETE_TASK, START_DELETE_TASK
} from "../../Types";
import {aleartsToast, deleteAlert} from "../../../utils/alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";

function DeleteTaskAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/tasks/" + values.id
    return async (dispatch) => {
        dispatch({
            type: START_DELETE_TASK
        })
        try {
            const result  = await deleteAlert("هل انت متأكد ؟","تريد الان حذف مهمة" ,"نعم اريد حذف المهمة")
            if (result) {
                const response = await axios.delete(api, {
                    headers: {Authorization: `Bearer ${token}`}
                });

                dispatch({
                    type: DELETE_TASK,
                    payload: values.id
                })
                aleartsToast("success", "تم حذف المهمة بنجاح")
            }
        } catch (error) {
            dispatch({
                type: FAILED_DELETE_TASK
            })
            aleartsToast("error","خطأ !! لم يتم حذف المهمة")
        }
    }
}

export default DeleteTaskAction
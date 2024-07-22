import axios from "axios";
import {
 DELETE_SOME_TASKS,
   FAILED_DELETE_SOME_TASKS,
    START_DELETE_SOME_TASKS
} from "../../Types";
import {aleartsToast, deleteAlert} from "../../../utils/alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";


function DeleteManyTasksAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/tasks/delete"
    return async (dispatch) => {
        dispatch({
            type: START_DELETE_SOME_TASKS
        })
        try {
            const result  = await deleteAlert("هل انت متأكد ؟","تريد الان حذف المهام المحددة" ,"نعم اريد حذف هذه الحسابات")
            if (result) {
                const response = await axios.post(
                    api,
                    {ids:values.tasksIds}, // Send JSON data directly as an object
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json', // Set Content-Type to indicate JSON data
                        },
                    }
                );
                dispatch({
                    type: DELETE_SOME_TASKS,
                    payload:values.tasksIds
                })
                aleartsToast("success", "تم حذف المهام المحددة بنجاح")
            }
        } catch (error) {
            dispatch({
                type: FAILED_DELETE_SOME_TASKS
            })
            aleartsToast("error","خطأ !! لم يتم حذف المهام المحددة")
        }
    }
}

export default DeleteManyTasksAction
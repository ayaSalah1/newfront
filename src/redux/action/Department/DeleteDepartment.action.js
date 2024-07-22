import axios from "axios";
import {
    DELETE_DEPARTMENT, FAILED_DELETE_DEPARTMENT, START_DELETE_DEPARTMENT
} from "../../Types";
import {aleartsToast, deleteAlert} from "../../../utils/alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";

function DeleteDepartmentAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/departments/" + values.id
    return async (dispatch) => {
        dispatch({
            type: START_DELETE_DEPARTMENT
        })
        try {
            const result  = await deleteAlert("هل انت متأكد ؟","تريد الان حذف القسم" ,"نعم اريد حذف الفريق")
            if (result) {
                const response = await axios.delete(api, {
                    headers: {Authorization: `Bearer ${token}`}
                });


                dispatch({
                    type: DELETE_DEPARTMENT,
                    payload: values.id
                })
                aleartsToast("success", "تم حذف القسم بنجاح")
            }
        } catch (error) {
            dispatch({
                type: FAILED_DELETE_DEPARTMENT
            })
            aleartsToast("error","خطأ !! لم يتم حذف القسم")
        }
    }
}

export default DeleteDepartmentAction
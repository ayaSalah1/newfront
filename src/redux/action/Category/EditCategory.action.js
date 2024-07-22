import axios from "axios";
import {
    EDIT_CATEGORY,
    FAILED_EDIT_CATEGORY, START_EDIT_CATEGORY,
} from "../../Types";
import {aleartsToast} from "../../../utils/alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";

function EditCategoryAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/categories/" + values.id
    return async (dispatch) => {
        dispatch({
            type: START_EDIT_CATEGORY
        })
        try {
            const response = await axios.put(api, {
                name:values.name,
                supervisor:values.supervisor,
            },{
                headers: { Authorization: `Bearer ${token}` }});
            dispatch({
                type: EDIT_CATEGORY,
                payload: {
                    id: response.data.data._id,
                    updatedDataEdit:response.data.data
                }
            })
            aleartsToast("success","تم تعديل الفئة بنجاح")
        } catch (error) {
            dispatch({
                type: FAILED_EDIT_CATEGORY
            })
            aleartsToast("error",error.response.data.message)
        }
    }
}

export default EditCategoryAction
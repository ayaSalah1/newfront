import axios from "axios";
import {aleartsToast} from "../../../alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";
import socket from "../../../socket";

function EditTaskCardAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/tasks/cards/" + values._id
    return async (dispatch) => {
        try {
            const response = await axios.put(api, {
                name:values.name,
            },{
                headers: { Authorization: `Bearer ${token}` }});           
        } catch (error) {
            aleartsToast("error","خطأ !! لم يتم تعديل المهمة")
        }
    }
}

export default EditTaskCardAction
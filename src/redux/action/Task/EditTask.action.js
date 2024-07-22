import axios from "axios";
import {
    EDIT_TASK,
    FAILED_EDIT_TASK,
    START_EDIT_TASK,
} from "../../Types";
import {aleartsToast} from "../../../utils/alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";
import socket from "../../../socket";

function EditTaskAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/tasks/" + values.id
    return async (dispatch) => {
        dispatch({
            type: START_EDIT_TASK
        })
        try {
            const response = await axios.put(api, {
                name:values.name,
                description:values.description,
                deadline:values.deadline,
                priority:values.priority,
                assignTo:values.assignTo,
                assignOn:values.assignOn,
                taskTime: values.taskTime,
                priorityColor : values.priorityColor
            },{
                headers: { Authorization: `Bearer ${token}` }});

            const notification = await axios.post( rootRoute + "/api/v1/notifications", {
                user_id: values.assignTo,
                type: 'alert',
                notification : `لقد تم اجراء تعديلات علي مهمة (${values.name})`
            },{
                headers: { Authorization: `Bearer ${token}` }});
            dispatch({
                type: EDIT_TASK,
                payload: response.data.data
            })
            socket.emit('sendNotification', {
                user_id: values.assignTo,
                type: 'alert',
                notification : `لقد تم اجراء تعديلات علي مهمة (${values.name})`,
                createdAt: new Date(),
            })
            aleartsToast("success","تم تعديل المهمة بنجاح")
            return response.data.data
        } catch (error) {
            dispatch({
                type: FAILED_EDIT_TASK
            })
            aleartsToast("error","خطأ !! لم يتم تعديل المهمة")
        }
    }
}

export default EditTaskAction
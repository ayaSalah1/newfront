import axios from "axios";
import {
    CREATE_TASK,
    FAILED_CREATE_TASK,
    START_CREATE_TASK,
} from "../../Types";
import {aleartsToast} from "../../../utils/alearts/alearts";
import {rootRoute} from "../../../Routes/Root.route";
import socket from "../../../socket";

function CreateTaskAction (values) {
    const user =  JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = rootRoute + "/api/v1/tasks"
    return async (dispatch) => {
        dispatch({
            type: START_CREATE_TASK
        })
        try {
            const response = await axios.post(api, {
                name:values.name,
                description:values.description,
                deadline:values.deadline,
                priority:values.priority,
                taskTime:values.taskTime,
                assignTo:values.assignTo,
                assignOn:values.assignOn,
                taskCard: values.taskCard,
                priorityColor: values.priorityColor
            },{
                headers: { Authorization: `Bearer ${token}` }});
            const notification = await axios.post( rootRoute + "/api/v1/notifications", {
                user_id: values.assignTo,
                type: 'alert',
                notification : `تم تعيين مهمة جديدة ${values.name}`
            },{
                headers: { Authorization: `Bearer ${token}` }});

                socket.emit('sendNotification', {
                    user_id: values.assignTo,
                    type: 'alert',
                    notification : `تم تعيين مهمة جديدة ${values.name}`,
                    createdAt: new Date(),
                })
            // dispatch({
            //     type: CREATE_TASK,
            //     payload: response.data.data
            // })
            aleartsToast("success","تم اضافة المهمة بنجاح")
        } catch (error) {
            // dispatch({
            //     type: FAILED_CREATE_TASK
            // })
            aleartsToast("error","خطأ !! لم يتم اضافة المهمة")
        }
    }
}

export default CreateTaskAction
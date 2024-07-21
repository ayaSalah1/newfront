import axios from "axios";
import {rootRoute} from "../../../Routes/Root.route";
import socket from "../../../socket";

const GetTodayTasksAction = (values) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user.token;
    const date = new Date().toISOString().split('T')[0];
    const api =rootRoute + `/api/v1/tasks?&assignTo=${user.data._id}&deadline=${date}`;
    return async (dispatch) => {
        try {
            const response = await axios.get(api, {
                headers: { Authorization: `Bearer ${token}` }});
                if(response.data.data.length > 0) { 
                    response.data.data.forEach(element => {
                        socket.emit('sendNotification', {
                            user_id: user.data._id,
                            type: 'reminder',
                            notification : `نذكرك بان اليوم موعد تسليم ${element.name}`,
                            seen: 0,
                            createdAt: new Date(),
                        })
                    });
                }
                
        } catch (error) {
           console.log(error);
        }
    }
}

export default GetTodayTasksAction
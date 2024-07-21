import axios from "axios";
import {
    FAILED_GET_TASKS_EMPLOYEE, GET_NEW_TASKS_EMPLOYEE,
    GET_TASKS_EMPLOYEE,
    START_GET_TASKS_EMPLOYEE
} from "../../Types";
import {rootRoute} from "../../../Routes/Root.route";

const NewTaskAction = ({page}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const api = `${rootRoute}/api/v1/tasks?page=${page}&assignTo=${user.data._id}&isDone=${false}`;
    return async (dispatch) => {
        dispatch({
            type: START_GET_TASKS_EMPLOYEE
        })
        try {
            const response = await axios.get(api, {
                headers: { Authorization: `Bearer ${token}` }});
            dispatch({
                type: GET_NEW_TASKS_EMPLOYEE,
                payload: {
                    data:response.data.data,
                    numberOfPages:response.data.paginationResult.numberOfPages
                }
            })
        } catch (error) {
            dispatch({
                type: FAILED_GET_TASKS_EMPLOYEE
            })
        }
    }
}

export default NewTaskAction
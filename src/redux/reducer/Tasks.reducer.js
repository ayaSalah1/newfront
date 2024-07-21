import {
    CREATE_TASK, DELETE_SOME_TASKS, DELETE_TASK, EDIT_TASK,
    FAILED_CREATE_TASK,
    FAILED_GET_TASKS,
    GET_TASKS, GET_TASKS_EMPLOYEE,
    START_CREATE_TASK,
    START_GET_TASKS,
    Get_Tasks_Cards, Task_Delivery, GET_NEW_TASKS_EMPLOYEE
} from "../Types";

const initialState = {
    data: [],
    cards: [],
    numberOfPages: 1,
    isLoadingGetTasks: false,
    isSuccessGetTasks: false,
    isLoadingCreateTask: false,
    isSuccessCreateTask: false,

};

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GET_TASKS:
            return { ...state, isLoadingGetTasks: true };
        case GET_TASKS:
            return { ...state,data: action.payload.data,numberOfPages:action.payload.numberOfPages, isLoadingGetTasks: false, isSuccessGetTasks: true };
        case FAILED_GET_TASKS:
            return { ...state, isLoadingGetTasks: false, isSuccessGetTasks: false };

        case GET_TASKS_EMPLOYEE:
            return { ...state,data: action.payload.data,numberOfPages:action.payload.numberOfPages, isLoadingGetTasks: false, isSuccessGetTasks: true };

        case GET_NEW_TASKS_EMPLOYEE:
            return { ...state,data: action.payload.data,numberOfPages:action.payload.numberOfPages, isLoadingGetTasks: false, isSuccessGetTasks: true };

        case START_CREATE_TASK:
            return { ...state, isLoadingCreateTask: true };

        case CREATE_TASK:
            return { ...state, data: [...state.data,action.payload], isLoadingCreateTask: false, isSuccessCreateTask: true };

        case FAILED_CREATE_TASK:
            return { ...state, isLoadingCreateTask: false, isSuccessCreateTask: false };
        case EDIT_TASK:
            const updatedDataEdit = state.data.map((task) =>
                task._id === action.payload._id
                    ? { ...task, ...action.payload }
                    : task
            );
            return {
                ...state,
                data: updatedDataEdit,
            };
        case DELETE_TASK :
        case Task_Delivery:
            const updatedData = state.data.filter(
                (task) => task._id !== action.payload
            );
            return {
                ...state,
                data: updatedData,
            };
        case DELETE_SOME_TASKS:
            const updatedDataTasks = state.data.filter(
                (task) => !action.payload.includes(task._id)
            );
            return {
                ...state,
                data: updatedDataTasks,
            };
        case Get_Tasks_Cards : 
        return { ...state , cards: action.payload.data}
        default:
            return state;
    }
};


export default TasksReducer
import {
    Get_Tasks_Planner, EDIT_TASK
} from "../Types";


const initialState = {
    data : [],
    date : ""
};

const PlannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Get_Tasks_Planner:
            return {...state, data: action.payload.data , date : action.payload.date};
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
        default:
            return state;
    }
};

export default PlannerReducer
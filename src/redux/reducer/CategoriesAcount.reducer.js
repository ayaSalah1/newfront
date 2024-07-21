import {
    CREATE_CATEGORY_ACCOUNT,
    DELETE_CATEGORY_ACCOUNT, EDIT_CATEGORY_ACCOUNT, FAILED_DELETE_CATEGORY_ACCOUNT, FAILED_GET_CATEGORIES_ACCOUNT,
    GET_CATEGORIES_ACCOUNT, START_DELETE_CATEGORY_ACCOUNT,
    START_GET_CATEGORIES_ACCOUNT,
} from "../Types";


const initialState = {
    data: [],
    numberOfPages: 1,
    isLoadingGetCategoriesAccount: false,
    isSuccessGetCategoriesAccount: false,
    isLoadingCreateCategoryAccount: false,
    isSuccessCreateCategoryAccount: false,
};
const CategoriesAcountReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GET_CATEGORIES_ACCOUNT:
            return { ...state, isLoadingGetCategoriesAccount: true };
        case GET_CATEGORIES_ACCOUNT:
            return { ...state, data: action.payload.data,numberOfPages:action.payload.numberOfPages, isLoadingGetCategoriesAccount: false, isSuccessGetCategoriesAccount: true };
        case FAILED_GET_CATEGORIES_ACCOUNT:
            return { ...state, isLoadingGetCategoriesAccount: false, isSuccessGetCategoriesAccount: false };
        case CREATE_CATEGORY_ACCOUNT:
            return { ...state, data: [...state.data,action.payload], isLoadingGetCategoriesAccount: false, isSuccessGetCategoriesAccount: true };
        case EDIT_CATEGORY_ACCOUNT:
            const updatedDataEdit = state.data.map((categoryAccount) =>
                categoryAccount._id === action.payload.id
                    ? { ...categoryAccount, ...action.payload.updatedDataEdit }
                    : categoryAccount
            );
            return {
                ...state,
                data: updatedDataEdit,
                loading: false,
                error: false,
            };

        case DELETE_CATEGORY_ACCOUNT:
            const updatedData = state.data.filter(
                (categoryAccount) => categoryAccount._id !== action.payload
            );
            return {
                ...state,
                data: updatedData,
            };
        case START_DELETE_CATEGORY_ACCOUNT:
            return {
                ...state,
            };
        case FAILED_DELETE_CATEGORY_ACCOUNT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default CategoriesAcountReducer
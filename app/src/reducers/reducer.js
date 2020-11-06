const initialState = {
    loading: false,
    ghibiList: [],
    errors : ""
}

export const ghibiReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCHING_API_START" :
            return{
                ...state, loading: true
            };
        case "FETCHING_API_SUCCESS" :
            return {
                ...state, loading: false, ghibiList: action.payload
            };
        case "FETCHING_API_FAIL" : 
            return {
                ...state, loading : false, errors : action.payload
            };
        default : 
            return state;
    }
}
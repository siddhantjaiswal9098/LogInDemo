const initialstate = {data : []}
export default ReducerSignupPage = (state =initialstate,action) => {
    switch (action.type) {
        case  "SAVE" : 
            return {
                ...state,
                data : action.data,
            }
        default : 
            return state;
    }
}
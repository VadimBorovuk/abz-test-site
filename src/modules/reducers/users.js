const initialState = {
    items: null,
    isReady: false
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
           return{
               ...state,
               items: action.payload,
               isReady: true
           };
        default:
            return state
    }
};

export default users;
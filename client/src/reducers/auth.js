//this is a one type of reducers
const authReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'AUTH':
            // localStorage of browser the data is store
            localStorage.setItem('Profile', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        case 'LOGOUT':
            //clear the data stored in local storage(application)
            localStorage.clear();
            return { ...state, data: null }
            
        

        default:
            return state;
    }
}

export default authReducer
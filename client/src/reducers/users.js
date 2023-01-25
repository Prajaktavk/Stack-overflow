const usersReducer = (states = [], action) => {
    // state should have some value(mandatory)
       //action.payload is a array of objects
switch (action.type) {
    case 'FETCH_USERS':
        // the data in the actions/currentUser.js file is written here as payload
        // so data comes from actions/currentUser.js file
        //action.payload is a array of objects
        //action.payload is assigned to states 
            //therefore states is also a array of objects
            //state is a individual value in states
            //the previous and current id will be evaluate if it matches then it sends the updated record to frontend 
           // otherwise it will send the old record to the frontend
        return action.payload;    
    case 'UPDATE_CURRENT_USER':
         //states which already assign to action.payload 
        //state is the individual value in states
        return states.map((state) => state._id === action.payload._id ? action.payload : state)
    default:
        return states;
}
}
export default usersReducer;
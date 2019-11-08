// import { FETCH_SMURF_LOADING,
// FETCH_SMURF_SUCCESS,
// FETCH_SMURF_FAIL,
// ADD_SMURF } from './actions';

const initialState = {
   smurfsData: [{
      name: "Ari",
      age: 4,
      height: "15cm",
      id: 6766758786
    }],
    isLoading: false,
    error: null
};

const reducer = (state = initialState, action) => {
switch(action.type){
    // case :
    // return{
    //     ...state
    // };
    default:
        return state;
}
};

export default reducer;
import { FETCH_SMURF_LOADING,
FETCH_SMURF_SUCCESS,
FETCH_SMURF_FAIL,
ADD_SMURF } from '../actions';

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
    case FETCH_SMURF_LOADING:
        console.log("reducer FETCH_SMURF_LOADING")
    return{
        ...state,
        isLoading: true
    };
    case FETCH_SMURF_SUCCESS:
        console.log("reducer FETCH_SMURF_SUCCESS")
    return{
        ...state,
        smurfsData: [...state.smurfsData, action.payload],
          isLoading: false
    };
    case FETCH_SMURF_FAIL:
        console.log("reducer FETCH_SMURF_FAIL", action.payload)
    return{
        ...state,
          isLoading: false,
          error: action.payload
    };
    case ADD_SMURF:
        console.log("reducer ADD_SMURF", action.payload)
    return{
        ...state,
        smurfsData: [...state.smurfsData, action.payload],
          isLoading: false
    };
    default:
        return state;
}
};

export default reducer;
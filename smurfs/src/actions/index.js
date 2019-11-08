import axios from 'axios';

export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";

export const addNewSmurf = newSmurf => dispatch => {
    console.log("addNewSmurf AC", newSmurf)
dispatch({ type: ADD_SMURF, payload: newSmurf})
};

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_LOADING });
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("API GET res.data", res.data);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
        
    })
    .catch(err => {
        dispatch({ type: FETCH_SMURF_FAIL, payload: err})
    })

};
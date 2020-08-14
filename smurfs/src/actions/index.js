import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = `FETCHING_SMURFS_SUCCESS`
export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURF = 'FETCH_SMURF'

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log("App -> res.data", res.data)
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
        
      })
      .catch(err => {
        console.log(err)
      })
};

export const addSmurf = newSmurf => {
    console.log('add smurf action creator');
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        console.log("App -> smurfs", res)
        return { type: ADD_SMURF, payload: newSmurf}
      })
      .catch(err => {
      console.log("App -> err", err.response)
      })
      .finally(() => {
      });
};

export const fetchSmurf = (id) => {
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log("fetchSmurf -> res.data[id]", res.data[id])
            return { type: FETCH_SMURF, payload: res.data[id] }
            // setSmurf(res.data[id])
        })
        .catch((err) => console.log(err.response))
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action);
    } else if (typeof action === 'function') {
        action(store.dispatch)
    }
}
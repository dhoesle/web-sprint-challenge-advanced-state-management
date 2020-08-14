import {
    FETCHING_SMURFS_START,
    ADD_SMURF,
    FETCHING_SMURFS_SUCCESS,
    FETCH_SMURF
} from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false

};

export const smurfListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SMURF:
            return {
                smurfs: [
                    ...state.smurfs
                ]
                
            };
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FETCH_SMURF:
            return {
                ...state,
                // smurfs: state.action.payload
            }
        default:
            return state;
            
    }
}
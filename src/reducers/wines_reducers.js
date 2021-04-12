// Reducers will find a match for a function(action creators)
// which returns an object of type and payload.

// state is the previous state.
// So the point of this is to update the state, in this function
// we will update state. The point of having the previous state
// is to update the new state and return the new state.

// It receives an action with object of 'type' and 'payload', finds
// a match and updates state.

export default function(state={}, action){

    switch (action.type) {

        case 'WINES':

            return {...state, wines: action.payload}

        default:

            return state
    }

}
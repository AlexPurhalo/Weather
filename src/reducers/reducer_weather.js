//  Here we take variable from action that equal actual type of action
import { FETCH_WEATHER } from '../actions/index';
//  19. This is our reducer for handling th fetchFeather action
//      This part of code responsible for action receiving
//      To check this form console we can use: 'console.log('Action received', action)' in function
//      Then when we've received our action we want return actual 'state' of reducer
export default function(state = null, action){
// Switch takes action.type as parameter and if its recognize current parameter
// it adds data to 'payload' array.
// This data coming as a new array to payload.data object.
// Something like that: payload.data = [ city, city, city ]
// 'state' is our new 'city' that adds to array     
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }

    return state
}

import { SAY_BYE } from "../actions/hello-action";

const initialState = {
    msg : 'Hello World'
}

export const helloReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SAY_BYE:
            return {
                msg : 'Good Bye ☺'
            };
    
        default:
            return state
    }
}
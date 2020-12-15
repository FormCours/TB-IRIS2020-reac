import { DECR_CPT, INCR_CPT, RESET_CPT } from "../actions/counter-action";

// Valeur initial du state (Categorie 'Counter')
const initialCounter = {
    resetValue: 0,
    count: 10
}

// Création du reducer pour les actions du compteur
export const counterReducer = (state = initialCounter, action) => {
    console.log(action);

    switch (action.type) {
        case INCR_CPT:
            return {
                ...state,
                count: state.count + action.payload
            }
        
        case DECR_CPT:
            return {
                ...state,
                count: state.count - action.payload
            }

        case RESET_CPT:
            return {
                ...state,
                count: state.resetValue
            };

        default:
            return state;
    }

}
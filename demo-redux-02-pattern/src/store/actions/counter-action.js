// Création de constante avec le nom des actions possible
export const INCR_CPT = 'INCR_CPT';
export const DECR_CPT = 'DECR_CPT';
export const RESET_CPT = 'RESET_CPT';


// Méthode pour générer les actions a envoyer dans le reducer du store
// - Ecriture sous forme de fct
export const resetCounter = function() {
    return {
        type: RESET_CPT 
    };
}

export const incrementCounter = (value) => {
    return {
        type: INCR_CPT,
        payload: value
    };
}

// - Ecriture sous forme de lambda
export const decrementCounter = (value) => ({
    type: DECR_CPT,
    payload: value
})



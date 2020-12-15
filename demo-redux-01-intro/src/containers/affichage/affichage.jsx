import React from 'react';
import {connect} from 'react-redux';

const Affichage = (props) => {
    const {count} = props;

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}

// Regle de consommation du store
//*******************************/
// Mapping du state du Store vers les props du composant
const mapStateToProps = (state) => ({
    count: state.count
})

// La méthode connect permet de créer une composant qui "encapsule" le notre
// Pour applique les regles de relation avec le Store Redux
export default connect(mapStateToProps)(Affichage);
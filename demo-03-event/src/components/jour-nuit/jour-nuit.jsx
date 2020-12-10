import React, { Component } from 'react';


class JourNuit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jour: true
        };
    }

    changerEtat = (event) => {
        console.log(event)
        this.setState((oldState) => ({
            jour: !oldState.jour
        }))
    }

    render() {
        const {jour} = this.state;
        
        return (
            <div>
                <p>{jour ? 'Jour' : 'Nuit'}</p>
                <button onClick={this.changerEtat}>Changer</button>
            </div>
        );
    }
}

export default JourNuit;
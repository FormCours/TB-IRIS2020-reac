import React, { Component } from 'react';

class DemoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contenu: ''
        }
    }

    handleContenu = (e) => {
        const {value} = e.target;

        this.setState({
            contenu: value
        })
    }

    render() {
        return (<>
            <h4>Formulaire avec une seul input !</h4>
            <form>
                <input type="text" 
                    value={this.state.contenu} onChange={this.handleContenu}/>

                <h6>Contenu de l'input : </h6>
                <p>{this.state.contenu}</p>
            </form>
        </>);
    }
}

export default DemoInput;
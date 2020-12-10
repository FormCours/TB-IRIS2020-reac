import React, { Component } from 'react';

class MultiInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom:'',
            prenom:'',
            email:'',
            choix:'backend'
        }
    }

    handleInput = (e) => {
        const {value, name} = e.target; 

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Exemple : - Envoyer une requete AJAX
        //           - Envoyer les donnes vers un composant parent (chap suivant ;) )
        //           - etc ...

        this.setState({
            nom:'',
            prenom:'',
            email:'',
            choix:'backend'
        })
    }

    render() {
        const {nom, prenom, email, choix} = this.state;

        return (<>
            <h4>Formulaire avec plusieurs inputs !</h4>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" placeholder="Nom"
                        name="nom" value={nom} onChange={this.handleInput}  />
                </div>
                <div>
                    <input type="text" placeholder="Prenom"
                        name="prenom" value={prenom} onChange={this.handleInput} />
                </div>
                <div>
                    <input type="email" placeholder="Email"
                        name="email" value={email} onChange={this.handleInput} />
                </div>
                <div>
                    <select name="choix" value={choix} onChange={this.handleInput} >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="reseau">Reseau</option>
                    </select>
                </div>
                <input type="submit" value="Valider !"/>
            </form>
        </>);
    }
}

export default MultiInput;
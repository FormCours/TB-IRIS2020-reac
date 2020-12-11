import React, { Component } from 'react';

import style from './calculatrice.module.css';

const OP_ADD = "add";
const OP_SUB = "sub";
const OP_MULT = "mult";
const OP_DIV = "div";


class Calculatrice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nb1: '',
            nb2: '',
            op: OP_MULT,
            result: undefined
        }
    }

    handleNumberInput = (event) => {
        const name = event.target.name;
        const value = event.target.value.replace(',', '.');
        
        const regex = /^[0-9]*([0-9]\.[0-9]*)?$/;
        if(regex.test(value)) {
            this.setState({
                [name]: value
            });
        }
    }

    handleOperation = (event) => {
        this.setState({
            op: event.target.value
        })
    }

    calcul = (nb1_text, nb2_text, op) => {
        const nb1 = parseFloat(nb1_text);
        const nb2 = parseFloat(nb2_text);

        switch (op) {
            case OP_ADD:
                return nb1 + nb2;
            case OP_SUB:
                return nb1 - nb2;
            case OP_DIV:
                if(nb2 === 0) {
                    return 'Math Error';
                }
                return nb1 / nb2;
            case OP_MULT:
                return nb1 * nb2;
        }
        return undefined;
    }

    handleSubmit = () => {
        e.preventDefault();

        this.setState((oldState, props) => ({
            result: this.calcul(oldState.nb1, oldState.nb2, oldState.op)
        }))
    }

    render() {
        const {nb1, nb2, op, result} = this.state;

        return (
            <div>
                <h2>Calculatrice</h2>
                <form className={style.calculatrice} onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nb1">Nb1</label>
                        <input id="nb1" type="text"
                            name="nb1" value={nb1} onChange={this.handleNumberInput}/>
                        <label htmlFor="op"> Operation </label>
                        <select id="op" value={op} onChange={this.handleOperation}>
                            <option value={OP_ADD}>+</option>
                            <option value={OP_SUB}>-</option>
                            <option value={OP_MULT}>x</option>
                            <option value={OP_DIV}>/</option>
                        </select>
                        <label htmlFor="nb2">Nb2</label>
                        <input id="nb2" type="text"
                            name="nb2" value={nb2} onChange={this.handleNumberInput}/>
                    </div>
                    <div>
                        <input type="submit" value="Calculer"/>
                        <input className={style.result} type="text"
                            value={result} readOnly/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calculatrice;
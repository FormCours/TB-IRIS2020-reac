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

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState((oldState, props) => {
            // Zone de code executé lors du setState
            let result = undefined;
            const nb1 = parseFloat(oldState.nb1);
            const nb2 = parseFloat(oldState.nb2);

            switch (oldState.op) {
                case OP_ADD:
                    result = nb1 + nb2;
                    break;
                case OP_SUB:
                    result = nb1 - nb2;
                    break;
                case OP_DIV:
                    if(nb2 === 0) {
                        result = 'Math Error';
                    }
                    else {
                        result = nb1 / nb2;
                    }
                    break;
                case OP_MULT:
                    result = nb1 * nb2;
                    break;
            }

            return {
                result
            };
        })
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
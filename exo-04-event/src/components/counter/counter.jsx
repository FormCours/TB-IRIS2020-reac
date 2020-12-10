import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        console.log('Avant :' + this.state.count);
        this.setState((s, p) => ({
            count: s.count + p.step
        }));
        console.log('Après :' + this.state.count);
    }

    reset = () => {
        this.setState({
            count: 0
        }, () => {
            // Code executer syncro après le setState
            console.log('Reset ♥');
        });
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    step: 1
}

Counter.propTypes = {
    step: PropTypes.number
}

export default Counter;
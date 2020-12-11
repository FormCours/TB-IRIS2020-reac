import React, { Component } from 'react';
import Display from '../../compenents/display/display';
import Operation, {ASC, DESC} from '../../compenents/operation/operation-v1';
import Reset from '../../compenents/reset/reset';

const DEFAULT_COUNT = 0;

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: DEFAULT_COUNT
        };
    }

    handleModify = (action, value) => {
        this.setState((state) => {
            switch (action) {
                case ASC:
                   return {
                       count : state.count + value
                   }
                case DESC:
                    return {
                        count : state.count - value
                    }
                default:
                    return {
                        ...state
                    };
            }
        })
    }

    handleReset = () => {
        this.setState({
            count: DEFAULT_COUNT
        });
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <h1>Counter</h1>
                <Display blob={count} />
                <Operation onModify={this.handleModify} />
                <Operation onModify={this.handleModify} step={5} />
                <Reset onAction={this.handleReset} active={count !== DEFAULT_COUNT} />
            </div>
        );
    }
}

export default Counter;
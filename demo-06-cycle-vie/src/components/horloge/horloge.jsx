import React, { Component, PureComponent } from 'react';
import moment from 'moment';


class Horloge extends Component {

    constructor(props) {
        super(props);

        this.state = {
            now: moment()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('Tic');
            this.setState({
                now: moment()            
            });
        }, 250);

        document.title = this.state.now.format('HH:mm:ss');
    }

    componentDidUpdate() {
        document.title = this.state.now.format('HH:mm:ss');
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log('Render');
        const hours = this.state.now.format('HH');
        const minutes = this.state.now.format('mm');
        const seconds = this.state.now.format('ss');

        return (
            <p>{hours}:{minutes}:{seconds}</p>
        );
    }
}

export default Horloge;
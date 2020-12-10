import React, { Component } from 'react';


class DateDuJour extends Component {

    constructor(props) {
        super(props);

        this.state = {
            today: new Date()
        }
    }

    render() {
        const {today} = this.state;

        const opt = {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        const todayFormated = today.toLocaleString('fr-BE', opt);

        return (
            <p>Nous sommes le {todayFormated}</p>
        )
    }
}

export default DateDuJour;
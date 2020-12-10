import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/fr';


class DateDuJour extends Component {

    constructor(props) {
        super(props);

        this.state = {
            today: moment()
        }
    }

    render() {
        const {today} = this.state;

        return (
            <p>La date est {today.format('DD MMMM YYYY')}</p>
            // <p>{today.format('LL')}</p>
        )
    }
}

export default DateDuJour;
import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DataRange extends Component {

    state = {
        from: null,
        to: null,
    };

    render() {
        const {from, to} = this.state;
        const selectedRange = from && to && `${from.toDateString()} ${to.toDateString()}`;
        return (
            <div className='data-range'>
                <DayPicker
                    // ref='daypicker'
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }

    handleDayClick = (day) => {
        this.setState(DateUtils.addDayToRange(day, this.state));
    }

}
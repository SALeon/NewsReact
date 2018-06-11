import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from "react-redux";
import {changedRange} from '../../AC';
import PropTypes from 'prop-types';

class DataRange extends Component {

    static propTypes = {
        //from store
        range: PropTypes.shape(
            {
                from: PropTypes.object,
                to: PropTypes.object
            }
        )
    };

    render() {
        const {from, to} = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} ${to.toDateString()}`;
        return (
            <div className='data-range'>
                <DayPicker
                    ref='daypicker'
                    selectedDays = {day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick = {this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }

    handleDayClick = (day) => {

        const {changedRange, range} = this.props;
        changedRange(DateUtils.addDayToRange(day, range));
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), {changedRange})(DataRange);
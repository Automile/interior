import React from 'react';
import Calendar from '../react-date-range/lib/Calendar.js';
import TimePicker from './TimePicker';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     date: moment(props.date),
        //     hour: moment(props.date).hour(),
        //     minute: moment(props.date).minute()
        // }
    }

    componentWillMount = () => {
        if (!this.props.date && this.props.time) {
            this.setState({
                date: moment().set({
                    'hour': this.props.time.hour(),
                    'minute': this.props.time.minute()
                })
            })
        }
    }

    handleTimeChange = (time) => {
        this.setState({
            hour: moment(time).hour(),
            minute: moment(time).minute()
        });

        this.handleDateChange();
    }

    handleDateChange = (date = this.state.date) => {
        this.setState({
            date: moment(date).set({
                'hour': this.state.hour,
                'minute': this.state.minute,
                'second': 0
            })
        });

        this.handleChange();
    }

    handleChange = () => {
        this.props.onChange(this.state.date);
    }

    render() {
        return (
            <div class="picker">
                {this.props.date &&
                <Calendar
                    {...this.props}
                    onChange={this.handleDateChange}
                    date={this.props.date}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                />}

                {this.props.time &&
                <div>
                    <TimePicker
                        label={this.props.resources.time}
                        onChange={this.handleTimeChange}
                        width="200"
                        date={this.state.date}
                    />
                </div>}
            </div>
        );
    }
}

export default DatePicker;

import React from 'react';
import DateRange from '../react-date-range/lib/DateRange.js';
import moment from 'moment';
import TimePicker from './TimePicker';

class RangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.date,
            endDate: this.props.date
        }
    }

    componentWillMount = () => {
        if (this.props.startDate) {
            this.setState({ startDate: this.props.startDate });
        }

        if (this.props.endDate) {
            this.setState({ endDate: this.props.endDate });
        }
    }

    componentDidMount = () => {
        // console.log('did mount startDate', this.state.startDate)
        // console.log('did mount endDate', this.state.endDate)
    }

    handleStartTimeChange = (time) => {
        this.setState({
            startDate: moment(this.state.startDate).set({
                'hour': time.hour(),
                'minute': time.minute(),
                'second': time.second()
            })
        });

        this.handleChange();
    }

    handleEndTimeChange = (time) => {
        this.setState({
            endDate: moment(this.state.endDate).set({
                'hour': time.hour(),
                'minute': time.minute(),
                'second': time.second()
            })
        });

        this.handleChange();
    }

    handleDateChange = (date) => {
        const startDate = date.startDate.format('YYYY-MM-DD');
        const startTime = this.state.startDate.format('HH:mm');
        const endDate = date.endDate.format('YYYY-MM-DD');
        const endTime = this.state.endDate.format('HH:mm');

        this.setState({
            startDate: moment(`${startDate} ${startTime}`, 'YYYY-MM-DD HH:mm'),
            endDate: moment(`${endDate} ${endTime}`, 'YYYY-MM-DD HH:mm')
        });

        this.handleChange();
    }

    handleChange = () => {
        this.props.onChange(this.state);
    }

    render() {
        return (
            <div class="picker">
                {this.props.date &&
                <DateRange
                    {...this.props}
                    label={this.props.resources.dateRange}
                    onChange={this.handleDateChange}
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    minDate={this.props.minDate ? moment(this.props.minDate) : null}
                    maxDate={this.props.maxDate ? moment(this.props.maxDate) : null}
                />}

                {this.props.time &&
                <div class="row">
                    {this.props.dateRange && this.props.ranges &&
                    <div style={{width:'160px'}}>&nbsp;</div>}
                    <TimePicker
                        label={this.props.resources.startTime}
                        onChange={this.handleStartTimeChange}
                        width="200"
                        date={moment().set({ 'hour': this.state.startDate.hour(), 'minute': this.state.startDate.minute()})}
                    />

                    <TimePicker
                        label={this.props.resources.endTime}
                        onChange={this.handleEndTimeChange}
                        width="200"
                        date={moment().set({ 'hour': this.state.endDate.hour(), 'minute': this.state.endDate.minute()})}
                    />
                </div>}
            </div>
        );
    }
}

export default RangePicker;

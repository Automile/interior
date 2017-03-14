import React from 'react';
import padToTwo from './padToTwo';

class TimePicker extends React.Component {
    constructor(props) {
        super(props);

        const twelveHourClock = moment().format('LT').match(/am|pm/i) ? true : false;

        const hours = [];
        for (let i = 0; i <= (twelveHourClock ? 12 : 23); i++) {
            hours.push(padToTwo(i));
        }

        const minutes = [];
        for (let i = 0; i <= 59; i++) {
            minutes.push(padToTwo(i));
        }

        this.state = {
            ampm: moment(props.date).format('A'),
            twelveHourClock,
            hours,
            minutes
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            ampm: moment(nextProps.date).format('A')
        });
    }

    componentDidMount = () => {
        this.handleChange();
    }

    handleChange = () => {
        let time;
        if (this.state.twelveHourClock) {
            time = moment(`${this.hourSelect.value}:${this.minuteSelect.value} ${this.ampmSelect.value}`, 'hh:mm a');
        } else {
            time = moment(`${this.hourSelect.value}:${this.minuteSelect.value}`, 'HH:mm');
        }

        this.props.onChange(time);
    }

    render() {
        let selectedHour = padToTwo(moment(this.props.date).hour());
        if (this.state.twelveHourClock) {
            selectedHour = padToTwo(moment(`${selectedHour}`, ['HH']).format('h'));
        }

        const selectedMinute = padToTwo(moment(this.props.date).minute());

        // console.log(selectedHour, selectedMinute);

        return (
            <div class="picker__time" style={{
                width: this.props.width
            }}>
                <div className="label">{this.props.label}</div>
                <div className="row row--middle">
                    <div class="picker__select select push-half--right">
                        <select value={selectedHour}
                            onChange={this.handleChange}
                            ref={(select) => { this.hourSelect = select; }}
                        >
                            {this.state.hours.map(hour =>
                                <option value={hour} selected={selectedHour === hour}>{hour}</option>
                            )}
                        </select>
                    </div>
                    <div>:</div>
                    <div class="picker__select select push-half--left">
                        <select value={selectedMinute}
                            onChange={this.handleChange}
                            ref={(select) => { this.minuteSelect = select; }}
                        >
                            {this.state.minutes.map(minute =>
                                <option value={minute} selected={selectedMinute === minute}>{minute}</option>
                            )}
                        </select>
                    </div>
                    {this.state.twelveHourClock &&
                    <div class="picker__select select push-half--left">
                        <select value={this.state.ampm.toUpperCase()}
                            onChange={this.handleChange}
                            ref={(select) => { this.ampmSelect = select; }}
                        >
                            <option value="AM" selected={this.state.ampm === 'AM'}>AM</option>
                            <option value="PM" selected={this.state.ampm === 'PM'}>PM</option>
                        </select>
                    </div>}
                </div>
            </div>
        );
    }
}

TimePicker.propTypes = {};

export default TimePicker;

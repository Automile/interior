import React from 'react';
import RangePicker from './RangePicker';
import DatePicker from './DatePicker';

class Wrapper extends React.Component {
    render() {
        const { settings } = this.props;

        return (
            <div class={settings.dateRange && settings.ranges ? 'has-ranges' : null}>
                {settings.dateRange ? (
                    <RangePicker {...settings} />
                ) : (
                    <DatePicker {...settings} />
                )}
            </div>
        );
    }
}

export default Wrapper;

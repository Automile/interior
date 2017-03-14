import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Wrapper from './Wrapper';

(function ($) {
    const pluginName = 'automileDatePicker';
    const defaults = {
            dateRange: false,
            date: moment(),
            time: false,
            startDate: moment('00:00', 'H:mm'),
            endDate: moment('23:59', 'H:mm'),
            resources: {
                dateRange: 'Date Range',
                time: 'Choose Time',
                startTime: 'Choose Start Time',
                endTime: 'Choose End Time'
            }
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = {...defaults, ...options};
        this.resources = {...defaults.resources, ...options.resources};
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            this.component = ReactDOM.render(
                <Wrapper settings={this.settings}
                    resources={this.resources}
                />,
                this.element
            );

            return this;
        }
    });

    $.fn[pluginName] = function (options) {
        return this.map(function () {
            if (!$.data(this, 'plugin_'+pluginName)) {
                $.data(this, 'plugin_'+pluginName, new Plugin(this, options));
            }
            return $.data(this, 'plugin_'+pluginName);
        });
    };
})(jQuery);

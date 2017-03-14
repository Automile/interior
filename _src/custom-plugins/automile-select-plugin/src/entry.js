import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';

(function ($) {
    const pluginName = 'automileSelect';
    const defaults = {
        chrome: true,
        fullWidth: true,
        search: false,
        selectAll: false,
        sort: false,
        resources: {
            allSelected: 'All Selected',
            nothingMatchedSearch: 'Nothing matched your search terms.',
            nrOfSelected: '{0} of {1} selected',
            placeholder: 'Select...',
            selectAll: 'Select All'
        }
    };

    const generateUUID = () => {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

    function Plugin(element, options) {
        this.element = element;
        this.settings = {...defaults, ...options};
        this.resources = {...defaults.resources, ...options.resources};
        this._defaults = defaults;
        this._name = `${pluginName}_${generateUUID()}`;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            // Get all the values off the select
            var values = $(this.element).find('option').map((i, value) => {
                return {
                    'selected': value.selected,
                    'text': value.text,
                    'value': value.value
                };
            });

            $(this.element)
                .empty()
                .wrap(`<span class="${this._name}"></span>`);

            // Render the component
            this.component = ReactDOM.render(
                <Wrapper settings={this.settings}
                    values={[...values]}
                    resources={this.resources}
                    selectorId={this.element.id}
                    selectorClass={this.element.className}
                    component={this}
                    multiple={this.element.attributes['multiple'] === undefined ? false : true}
                />,
                this.element.parentNode
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

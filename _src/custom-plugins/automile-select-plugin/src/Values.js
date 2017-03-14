import React from 'react';
import classNames from 'classnames';

class Values extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Values';
        this.state = {
            allSelected: false
        }
    }

    handleKeyPress(value, e) {
        switch(e.key) {
            case 'Enter':
                e.preventDefault();
                value ? this.handleClick(value) : this.handleSelectAll();
                break;
            case 'ArrowDown':
                e.preventDefault();
                $('.value:focus').next().focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                $('.value:focus').prev().focus();
                break;
        }
    }

    handleClick(value) {
        if (this.props.multiple) {
            // MULTIPLE SELECT VALUE CHANGE
            const index = this.props.values.findIndex(val => val.value === value.value);
            const newValue = { ...value, selected: !value.selected };
            const newValues = [
                ...this.props.values.slice(0, index),
                newValue,
                ...this.props.values.slice(index + 1),
            ];

            this.props.handleValueChange(newValues);
        } else {
            // SINGLE SELECT VALUE CHANGE
            const index = this.props.values.findIndex(val => val.value === value.value);
            const newValue = { ...value, selected: true };

            // set all to false
            const newPropsValues = [...this.props.values];
            newPropsValues.forEach(val => (
                val.selected = false
            ));

            // update the checked option
            const newValues = [
                ...newPropsValues.slice(0, index),
                newValue,
                ...newPropsValues.slice(index + 1),
            ];

            this.props.handleValueChange(newValues);
        }
    }

    handleSelectAll() {
        const newValues = this.props.values.map(val => (
            {
                ...val,
                selected: !this.state.allSelected
            }
        ));
        this.props.handleValueChange(newValues);
    }

    checkAllSelected(props) {
        let nrSelected = 0;
        for (let i = 0; i < props.values.length; i++) {
            if (props.values[i].selected === true) nrSelected++
        }

        const allSelected = nrSelected === props.values.length;
        this.setState({ allSelected: allSelected });
    }

    componentWillMount() {
        this.checkAllSelected(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.checkAllSelected(nextProps);
    }

    regexReplace(str) {
        if (this.props.query === '') return str.trim();

        const regex = new RegExp(`(${this.props.query})`, 'gi');
        return str.trim().replace(regex, '<span class="hl">$1</span>');
    }

    render() {
        let vals = this.props.values;

        // Only show the filtered options
        if (this.props.settings.search) {
            const query = this.props.query.toUpperCase();
            vals = vals.filter((val) => {
                const value = val.text.toUpperCase();
                return value.includes(query);
            });

            if (vals.length === 0) {
                return (
                    <div className="values">
                        <div className="value value-text">
                            {this.props.resources.nothingMatchedSearch}
                        </div>
                    </div>
                );
            }
        }

        // Sort the options if desired
        if (this.props.settings.sort) {
            vals.sort((a, b) => {
                const textA = a.text.toUpperCase();
                const textB = b.text.toUpperCase();

                if (textA < textB) {
                    return -1;
                }

                if (textA > textB) {
                    return 1;
                }

                return 0;
            });
        }

        return (
            <div className="values">
                {this.props.settings.selectAll &&
                 this.props.multiple &&
                 this.props.query === '' ?
                    <div className="row row--middle pointer value"
                        tabIndex="0"
                        onClick={() => this.handleSelectAll()}
                        onKeyDown={this.handleKeyPress.bind(this, null)}
                    >
                        <div className={classNames('push-half--right', {
                            'checkbox-icon': !this.state.allSelected,
                            'checkbox-icon--checked': this.state.allSelected
                        })}></div>
                        <div className="value-text">{this.props.resources.selectAll}</div>
                    </div>
                : null}

                {this.props.multiple ? (
                    // MULTI SELECT
                    vals.map(value => {
                        const classes = classNames({
                            'checkbox-icon': !value.selected,
                            'checkbox-icon--checked': value.selected
                        });

                        return (
                            <div key={value.value}
                                className="row row--middle pointer value"
                                tabIndex="0"
                                onClick={() => this.handleClick(value)}
                                onKeyDown={this.handleKeyPress.bind(this, value)}
                            >
                                <div style={{width: '14px'}} className={classes}></div>
                                <div className="value-text col overflow-ellipsis" dangerouslySetInnerHTML={{__html: this.regexReplace(value.text)}} />
                            </div>
                        );
                    })
                ) : (
                    // NOT MULTI SELECT
                    vals.map(value => (
                        <div key={value.value}
                            className="row row--middle pointer value"
                            tabIndex="0"
                            onClick={() => this.handleClick(value)}
                            onKeyDown={this.handleKeyPress.bind(this, value)}
                        >
                            {value.selected ? (
                                <svg style={{paddingLeft: '2px', width: '14px'}} xmlns="http://www.w3.org/2000/svg" width="14" height="10"><g fill="none" fillRule="evenodd"><path d="M-3-3h16v16H-3z"/><path fill="#777" d="M3.657 6.485l-2.12-2.12L.12 5.777l2.83 2.83.707.706 7.07-7.07L9.315.827 3.657 6.485z"/></g></svg>
                            ) : (
                                <div style={{width: '14px'}}>&nbsp;</div>
                            )}
                            <div className="value-text col overflow-ellipsis" dangerouslySetInnerHTML={{__html: this.regexReplace(value.text)}} />
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Values;

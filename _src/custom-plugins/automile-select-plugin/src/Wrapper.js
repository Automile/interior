import React from 'react';
import TetherComponent from 'react-tether'
import Drop from './Drop.js';
import classNames from 'classnames';
import Measure from 'react-measure';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            values: props.values,
            query: ''
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.values !== this.state.values) {
            $(this.props.component).trigger('change');
            this.handleChange();
        }
    }

    handleChange = () => {
        if (this.props.multiple) {
            const selected = this.state.values.filter(v => v.selected);
            this.props.settings.onChange(selected.map(v => v.value));
        } else {
            const selected = this.state.values.find(v => v.selected);
            this.setState({ isOpen: false });
            this.props.settings.onChange(selected.value);
        }
    }

    render() {
        const selected = this.state.values.filter(v => v.selected);

        let buttonText = selected.map(val => val.text).join(', ');
        if (selected.length > 2) {
            buttonText = this.props.resources.nrOfSelected
                            .replace('{0}', selected.length)
                            .replace('{1}', this.state.values.length);
        }

        if (selected.length === this.state.values.length) {
            buttonText = this.props.resources.allSelected;
        }

        if (!selected.length) {
            buttonText = this.props.resources.placeholder;
        }

        return (
            <span>
                <TetherComponent
                    attachment='top left'
                    targetAttachment='bottom left'
                    constraints={[    {
                      to: 'scrollParent',
                      pin: true
                    },
                    {
                      to: 'window',
                      attachment: 'together'
                    }]}
                >
                    { /* First child */ }
                    <Measure onMeasure={(dimensions) => this.setState({dimensions})}>
                        <button
                            className={classNames('button button--narrow', {
                                'is-active': this.state.isOpen,
                                'button--ghost': !this.props.settings.chrome,
                                'button--hollow': this.props.settings.chrome,
                                'button--block': this.props.settings.fullWidth,
                            })}
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({ isOpen: !this.state.isOpen });
                            }}
                            type="button"
                        >
                            <div className="row row--middle row--space-between">
                                <div className="col text-left">{buttonText}</div>
                                <div>
                                    <svg className="shape" style={{marginBottom: '1px'}} aria-hidden="true">
                                        <use xlinkHref="#shape-caret-down"></use>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </Measure>

                    { /* Second child: If present, this item will be tethered to the the first child */ }
                    {this.state.isOpen && (
                        <Drop
                            {...this.props}
                            {...this.state}
                            multiple={this.props.multiple}
                            width={this.state.dimensions.width}
                            closeSelect={() => this.setState({ isOpen: false })}
                            handleQueryChange={(event) => this.setState({ query: event.target.value })}
                            handleValueChange={(values) => this.setState({ values })}
                        />
                    )}
                </TetherComponent>

                <input
                    type="hidden"
                    value={selected.map(v => v.value)}
                    id={this.props.selectorId}
                    className={this.props.selectorClass}
                />
            </span>
        );
    }
}

export default Wrapper;

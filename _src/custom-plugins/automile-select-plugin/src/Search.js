import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="row row--middle search">
                <svg className="shape" aria-hidden="true">
                    <use xlinkHref="#shape-search"></use>
                </svg>
                <input type="text" value={this.props.query} onChange={this.props.handleQueryChange} />
            </div>
        );
    }
}

export default Search;

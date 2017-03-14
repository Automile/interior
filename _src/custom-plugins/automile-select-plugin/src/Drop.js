import React from 'react';
import Values from './Values';
import Search from './Search';
import enhanceWithClickOutside from 'react-click-outside';

class Drop extends React.Component {
    handleClickOutside(e) {
        if (e.path) {
            for (let i = 0; i < e.path.length; i++) {
                if (e.path[i].className === this.props.component._name) return false;
            }
        }

        this.props.closeSelect();
    }

    render() {
        return (
            <div style={{width: this.props.width}} className="automileSelect drop-content">
                {this.props.settings.search && (
                    <Search {...this.props} />
                )}

                <Values {...this.props} />
            </div>
        );
    }
}

export default enhanceWithClickOutside(Drop);

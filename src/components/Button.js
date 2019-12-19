import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
                <input type={'button'} value={this.props.caption} onClick={this.props.onClick} />
        );
    }
}

Button.defaultProps = {
    caption: 'N/A'
};

export default Button;

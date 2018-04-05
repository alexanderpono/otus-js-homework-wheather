import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
                <input type={'button'} value={this.props.caption} />
        );
    }
}

Button.defaultProps = {
    caption: 'N/A'
};

export default Button;

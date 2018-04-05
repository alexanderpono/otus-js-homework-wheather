import React, { Component } from 'react';
import Button from '../Button';

class FilterLevel1 extends Component {
    constructor(props) {
        super();
        this.state = {
            visibleGroup : 1
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Button caption={'A-F'}/>
                    <Button caption={'G-L'}/>
                    <Button caption={'M-R'}/>
                    <Button caption={'S-Z'}/>
                </div>
                <div>{this.state.visibleGroup}</div>
            </div>
        );
    }
}

export default FilterLevel1;

import React, { Component } from 'react';
import Button from '../Button';

class SourceCitiesPaginator extends Component {
    constructor(props) {
        super();
        this.state = {
            pageNo : 0
        }
    }

    render() {
        return (
            <div>
                <Button caption={'|<'}/>
                <Button caption={'<'}/>
                {this.state.pageNo}
                <Button caption={'>'}/>
                <Button caption={'>|'}/>


            </div>
        );
    }
}

export default SourceCitiesPaginator;

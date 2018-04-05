import React, { Component } from 'react';
import Button from '../Button';

class FilterLevel2 extends Component {
    constructor(props) {
        super();
        this.state = {
            visibleGroup : 1,
            visibleLetter : null
        }
    }

    render() {
        return (
            <div>
                {(this.state.visibleGroup === 0) && <div>
                    <Button caption={'A'}/>
                    <Button caption={'B'}/>
                    <Button caption={'C'}/>
                    <Button caption={'D'}/>
                    <Button caption={'E'}/>
                    <Button caption={'F'}/>
                </div>}

                {(this.state.visibleGroup === 1) && <div>
                    <Button caption={'G'}/>
                    <Button caption={'H'}/>
                    <Button caption={'I'}/>
                    <Button caption={'J'}/>
                    <Button caption={'K'}/>
                    <Button caption={'L'}/>
                </div>}

                {(this.state.visibleGroup === 2) && <div>
                    <Button caption={'M'}/>
                    <Button caption={'N'}/>
                    <Button caption={'O'}/>
                    <Button caption={'P'}/>
                    <Button caption={'Q'}/>
                    <Button caption={'R'}/>
                </div>}

                {(this.state.visibleGroup === 3) && <div>
                    <Button caption={'S'}/>
                    <Button caption={'T'}/>
                    <Button caption={'U'}/>
                    <Button caption={'V'}/>
                    <Button caption={'W'}/>
                    <Button caption={'X'}/>
                    <Button caption={'Y'}/>
                    <Button caption={'Z'}/>

                </div>}
            </div>
        );
    }
}

export default FilterLevel2;

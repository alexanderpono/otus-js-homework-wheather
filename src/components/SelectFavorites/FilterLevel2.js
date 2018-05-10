import React, { Component } from 'react';
import Button from '../Button';
import {pressLetter} from "../../actions";
import {connect} from "react-redux";
import SourceCitiesList2 from "./SourceCitiesList";
import {FILTER_A_F, FILTER_G_L, FILTER_M_R, FILTER_S_Z, NO_FILTER} from "../../constants/constants";

/*
class FilterLevel2 extends Component {
    constructor(props) {
        super();
        this.state = {
            visibleGroup : props.activeGroup,
            visibleLetter : props.activeLetter
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

                <div>{this.state.visibleLetter}</div>
            </div>
        );
    }
}

export default FilterLevel2;
*/

const FilterLevel2a = ({ filterGroup, pressLetter }) => {
    console.log('FilterLevel2a() filterGroup=', filterGroup);
    let filterAF = (filterGroup === NO_FILTER);
    let filterGL = filterAF;
    let filterMR = filterAF;
    let filterSZ = filterAF;

    filterAF = filterAF || (filterGroup === FILTER_A_F);
    filterGL = filterGL || (filterGroup === FILTER_G_L);
    filterMR = filterMR || (filterGroup === FILTER_M_R);
    filterSZ = filterSZ || (filterGroup === FILTER_S_Z);
    return (
        <div>
            {filterAF && <div>
                <Button caption={'A'} onClick={() => {pressLetter('A')}} />
                <Button caption={'B'} onClick={() => {pressLetter('B')}} />
                <Button caption={'C'} onClick={() => {pressLetter('C')}} />
                <Button caption={'D'} onClick={() => {pressLetter('D')}} />
                <Button caption={'E'} onClick={() => {pressLetter('E')}} />
                <Button caption={'F'} onClick={() => {pressLetter('F')}} />

            </div>}

            {filterGL && <div>
                <Button caption={'G'} onClick={() => {pressLetter('G')}} />
                <Button caption={'H'} onClick={() => {pressLetter('H')}} />
                <Button caption={'I'} onClick={() => {pressLetter('I')}} />
                <Button caption={'J'} onClick={() => {pressLetter('J')}} />
                <Button caption={'K'} onClick={() => {pressLetter('K')}} />
                <Button caption={'L'} onClick={() => {pressLetter('L')}} />
            </div>}

            {filterMR && <div>
                <Button caption={'M'} onClick={() => {pressLetter('M')}} />
                <Button caption={'N'} onClick={() => {pressLetter('N')}} />
                <Button caption={'O'} onClick={() => {pressLetter('O')}} />
                <Button caption={'P'} onClick={() => {pressLetter('P')}} />
                <Button caption={'Q'} onClick={() => {pressLetter('Q')}} />
                <Button caption={'R'} onClick={() => {pressLetter('R')}} />
            </div>}

            {filterSZ && <div>
                <Button caption={'S'} onClick={() => {pressLetter('S')}} />
                <Button caption={'T'} onClick={() => {pressLetter('T')}} />
                <Button caption={'U'} onClick={() => {pressLetter('U')}} />
                <Button caption={'V'} onClick={() => {pressLetter('V')}} />
                <Button caption={'W'} onClick={() => {pressLetter('W')}} />
                <Button caption={'X'} onClick={() => {pressLetter('X')}} />
                <Button caption={'Y'} onClick={() => {pressLetter('Y')}} />
                <Button caption={'Z'} onClick={() => {pressLetter('Z')}} />

            </div>}

            <div></div>
        </div>
    );
}


const mapStateToProps = state => {
    console.log('filterlevel2 mapStateToProps()');
    console.log('filterlevel2 mapStateToProps() state=', JSON.stringify(state));
    let newState = {
        filterGroup: state.srcList.filterGroup
    };
    console.log('filterlevel2 mapStateToProps() newState=', newState);

    return newState;
}

const mapDispatchToProps = dispatch => ({
    pressLetter: id => dispatch(pressLetter(id))
})

//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(SourceCitiesList2)


export default connect(mapStateToProps, mapDispatchToProps)(FilterLevel2a)
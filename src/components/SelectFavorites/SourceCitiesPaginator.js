import React from 'react';
import Button from '../Button';
import {connect} from "react-redux";
import {navPage} from "../../actions";
import * as filters from "../../constants/constants";
/*
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
                {'---'}
                <Button caption={'>'}/>
                <Button caption={'>|'}/>


            </div>
        );
    }
}

export default SourceCitiesPaginator;
*/

const SourceCitiesPaginator2 = ({ pageNo, navPage }) => {
    return (
        <div>
            <Button caption={'|<'} onClick={() => {navPage(filters.TO_FIRST_PAGE)}} />
            <Button caption={'<'}  onClick={() => {navPage(filters.PREV_PAGE)}} />
            {pageNo}
            <Button caption={'>'}  onClick={() => {navPage(filters.NEXT_PAGE)}} />
            <Button caption={'>|'} onClick={() => {navPage(filters.TO_LAST_PAGE)}} />


        </div>
    );
    
}

const mapStateToProps = state => {
    console.log('SourceCitiesPaginator2 mapStateToProps()');
    // console.log('filterlevel2 mapStateToProps() state=', JSON.stringify(state));
    let newState = {
        pageNo: state.srcList.pageNo
    };
    console.log('SourceCitiesPaginator2 mapStateToProps() newState=', newState);

    return newState;
}

const mapDispatchToProps = dispatch => ({
    navPage: id => dispatch(navPage(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SourceCitiesPaginator2)
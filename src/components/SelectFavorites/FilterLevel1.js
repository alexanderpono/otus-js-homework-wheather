import React from 'react';
import { connect } from 'react-redux'
import Button from '../Button';
import { groupFilter, clearFilter } from '../../actions'
import * as filters from "../../constants/constants";

const FilterLevel1 = ({ dispatch }) => {
    return (
        <div>
            <div>
                <Button caption={'A-F'} onClick={() => {dispatch(groupFilter(filters.FILTER_A_F))}} />
                <Button caption={'G-L'} onClick={() => {dispatch(groupFilter(filters.FILTER_G_L))}} />
                <Button caption={'M-R'} onClick={() => {dispatch(groupFilter(filters.FILTER_M_R))}} />
                <Button caption={'S-Z'} onClick={() => {dispatch(groupFilter(filters.FILTER_S_Z))}} />
                <Button caption={'ALL'} onClick={() => {dispatch(clearFilter())}} />
            </div>
            <div></div>
        </div>
    )
}

export default connect()(FilterLevel1)

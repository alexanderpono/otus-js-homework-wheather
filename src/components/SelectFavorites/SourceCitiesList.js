import React, { Component } from 'react';

class SourceCitiesList extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.cities.map((item, index) => (
                    <li key={index}><a href={'#' + index} >{item.name}</a></li>
                ))}
                </ul>
            </div>
        );
    }
}

export default SourceCitiesList;

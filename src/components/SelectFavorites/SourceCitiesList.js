import React from 'react';

// class SourceCitiesList extends Component {
//     render() {
//         let letter = this.props.activeLetter;
//         // console.log('letter=', letter);
//         // let letterIndexData = this.props.data.index[letter];
//         // console.log('letterIndexData=', letterIndexData);
//         // let cities = this.props.data.cities.slice(letterIndexData.start, letterIndexData.end);
//         let PAGE_SIZE = 20;
//         let bounds = this.getBoundsToShow(letter, this.props.pageNo, PAGE_SIZE);
//         console.log('bounds=', bounds);
//         let cities = this.props.data.cities.slice(bounds.start, bounds.end);
//         console.log('cities=', cities);
//
//         return (
//             <div>
//                 <ul>
//                 {cities.map((item, index) => (
//                     <li key={index}><a href={'#' + index} >{item.name}</a></li>
//                 ))}
//                 </ul>
//             </div>
//         );
//     }
//
//     getBoundsToShow(letter, pageNo, pageSize) {
//         // let letter = this.props.activeLetter;
//         console.log('letter=', letter);
//         let letterIndexData = this.props.data.index[letter];
//         console.log('letterIndexData=', letterIndexData);
//         let start = letterIndexData.start + (pageNo * pageSize);
//         let end = start + pageSize;
//         if (end > letterIndexData.end) {
//             end = letterIndexData.end;
//         };
//
//         return {start : start, end : end};
//
//
//         //let cities = this.props.data.cities.slice(letterIndexData.start, letterIndexData.end);
//
//     }
// }

const SourceCitiesList2 = ({ cities, toggleCity }) => {
    console.log('SourceCitiesList2.cities=', cities.length);
    return (
    <div>
        <ul>
            {cities.map((item, index) => (
                <li key={index}>
                    <a
                        href={'#' + index}
                        onClick={() => toggleCity(item.id)}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    );
};

/*
SourceCitiesList2.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleCity: PropTypes.func.isRequired
}
*/
export default SourceCitiesList2;

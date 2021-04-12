import React, { Component } from 'react';
import style from './wines_list.css';
import { connect } from 'react-redux';
import Wines from './wines/wines'

class Wines_Lists extends Component{

    render(){
        return(
            <div>
                <Wines />
            </div>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         prop: state.prop
//     }
// }

export default connect(null, null)(Wines_Lists)
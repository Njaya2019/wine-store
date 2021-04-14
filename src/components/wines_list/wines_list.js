import React, { Component } from 'react';
import style from './wines_list.css';
import { connect } from 'react-redux';
import { getAllWines } from '../../actions/index';
import Wines from './wines/wines';
import { bindActionCreators } from 'redux'

class WinesLists extends Component{
    componentWillMount(){
        this.props.getAllWines()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Wines />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        wines: state.wines
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(
           {getAllWines}, dispatch
        )
}

export default connect(mapStateToProps , mapDispatchToProps)(WinesLists)
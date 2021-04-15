import React, { Component } from 'react';
import style from './wines_list.css';
import { connect } from 'react-redux';
import { getAllWines, getWinesByType } from '../../actions/index';
import Wines from './wines/wines';
import { bindActionCreators } from 'redux'

class WinesLists extends Component{

    UNSAFE_componentWillMount(){
        this.props.getAllWines()
    }

    componentDidUpdate(){
        this.props.wineType?this.props.getWinesByType(this.props.wineType):this.props.getAllWines()
    }

    render(){
        
        return(
            <div>
                <Wines 
                    wineType={this.props.wineType}
                    wines={this.props.wines.wines} 
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        wines: state.wines
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
           {getAllWines,getWinesByType}, dispatch
        )
}

export default connect(mapStateToProps , mapDispatchToProps)(WinesLists)
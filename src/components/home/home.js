import React, {Component} from 'react';
import style from './home.css'
import WinesLists from '../wines_list/wines_list';
import LeftHeader from '../wines_header/wines_header';
import RightHeader from '../wines_header/right_container/right_container';
import { connect } from 'react-redux';
import { getAllWines, getWinesByType } from '../../actions/index';
import { bindActionCreators } from 'redux'

class Home extends Component {


    state = {
        categoryValue: null
    }

    UNSAFE_componentWillMount(){
        this.props.getAllWines()
    }

    handleCategoryClicked = (e) =>{
        this.setState({
            categoryValue: e.target.textContent
        })
    }

    UNSAFE_componentWillUpdate(){
        this.props.getWinesByType(this.state.categoryValue)
    }
    render(){
        return (
            <div className={style.home_container}>
                <div className={style.left_header} >
                    <LeftHeader  handleCategoryClicked={this.handleCategoryClicked}/>
                </div>
                <div className={style.right_header} >
                    <RightHeader />
                </div>
                <div className={style.wines_body}>
                    <WinesLists wines={this.props.wines.wines} />
                </div>   
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

export default connect(mapStateToProps , mapDispatchToProps)(Home)

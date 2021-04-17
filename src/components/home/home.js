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
        categoryValue: null,
        cartValues: null,
        totalPrice: 0,
        cartItems: [],
        num_of_bottles: 0,
        number_of_cases: 0
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
    handleAddToCart = (e) =>{
    
        let caseNumber = parseInt(e.target.parentNode.previousElementSibling.children[1].children[1].children[0].value)
        let bottleNumber = parseInt(e.target.parentNode.previousElementSibling.children[0].children[1].children[0].value)
        let casePrice = parseInt(e.target.parentNode.previousElementSibling.children[1].children[0].children[1].textContent.split('$')[1])
        let bottlePrice = parseInt(e.target.parentNode.previousElementSibling.children[0].children[0].children[1].textContent.split('$')[1])

        if(caseNumber || bottleNumber){
            if(caseNumber && !bottleNumber){
                let caseTotalPrice = caseNumber * casePrice
                let newTotal = caseTotalPrice + this.state.totalPrice
                this.setState({
                    totalPrice: newTotal
                })
            }
            else if(bottleNumber && !caseNumber){
                let bottleTotalPrice = bottleNumber * bottlePrice
                let newTotal = bottleTotalPrice + this.state.totalPrice
                let newBottleNumber = bottleNumber + this.state.num_of_bottles
                this.setState({
                    totalPrice: newTotal,
                    num_of_bottles: newBottleNumber
                })
            }
            else{
                let caseTotalPrice = caseNumber * casePrice
                let bottleTotalPrice = bottleNumber * bottlePrice
                let newTotal = caseTotalPrice + bottleTotalPrice + this.state.totalPrice
                let newBottleNumber = bottleNumber + this.state.num_of_bottles
                
                this.setState({
                    totalPrice: newTotal,
                    num_of_bottles: newBottleNumber
                })
            }
        }
        else{
            console.log('provide bottle or case number')
        }

        this.setState({
            cartValues: e.target.dataset.wineid
        })
    }
    handleEmptyCart = (e)=>{
        this.setState({
            num_of_bottles: 0,
            number_of_cases: 0,
            totalPrice: 0,
        })
    }
    render(){
        return (
            <div className={style.home_container}>
                <div className={style.left_header} >
                    <LeftHeader  handleCategoryClicked={this.handleCategoryClicked}/>
                </div>
                <div className={style.right_header} >
                    <RightHeader 
                        bottleNumber={this.state.num_of_bottles} 
                        totalPrice={this.state.totalPrice} 
                        cartiems={this.state.cartValues}
                        handleEmptyCart={this.handleEmptyCart}
                    />
                </div>
                <div className={style.wines_body}>
                    <WinesLists
                        handleAddToCart={this.handleAddToCart}
                        wines={this.props.wines.wines} 
                    />
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

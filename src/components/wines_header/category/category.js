import React, { Component } from 'react';
import style from './category.css'

class Category extends Component{
    // state = {
    //     active: false
    // }

    // btnClicked = (e) =>{
    //     let currentState = this.state.active;
    //     this.setState({active: !currentState})
    // }

    state = {
        bgColor: 'grey',
        // wineType: ''
    }

    btnClicked = (e) =>{
        // console.log(e.target.textContent)
        this.setState({
            bgColor: this.state.bgColor=='grey'? 'red': 'grey',
            // wineType: e.target.textContent
        })
    }
    
    render(){
        // let divState = this.state.active;
        return(
            
            <div 
            style={{backgroundColor: this.state.bgColor}} 
            onClick={this.props.onCatClicked}
            // className={
            //     style.catdiv, divState ? style.selected:null
            // }
            className={
                style.catdiv
            } 
            >
                {this.props.categoryname}
            </div>
        )
    }
}

export default Category;
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
        bgColor: 'grey'
    }

    btnClicked = (e) =>{
        this.setState({bgColor: this.state.bgColor=='grey'? 'red': 'grey'})
    }
    
    render(){
        // let divState = this.state.active;
        return(
            
            <div 
            style={{backgroundColor: this.state.bgColor}} 
            onClick={this.btnClicked}
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
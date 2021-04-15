import React, { Component } from 'react';
import style from './category.css'

class Category extends Component{

    state = {
        bgColor: 'grey'
    }

    btnClicked = (e) =>{
        this.setState({
            bgColor: this.state.bgColor=='grey'? 'red': 'grey',
        })
    }
    
    render(){
        return(
            
            <div 
            style={{backgroundColor: this.state.bgColor}} 
            onClick={this.props.onCatClicked}
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

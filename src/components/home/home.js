import React, {Component} from 'react';
import style from './home.css'
import Wineslist from '../wines_list/wines_list';
import LeftHeader from '../wines_header/wines_header';
import RightHeader from '../wines_header/right_container/right_container';

class Home extends Component {

    state = {
        categoryValue: null
    }

    handleCategoryClicked = (e) =>{
        // console.log(e.target.textContent)
        this.setState({
            categoryValue: e.target.textContent
        })
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
                    <Wineslist wineType={this.state.categoryValue} />
                </div>   
            </div>
        )
    }
}

export default Home;
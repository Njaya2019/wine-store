import React, { Component } from 'react';
import style from './wines_header.css';
import Category from './category/category';

class LeftHeader extends Component{

    render(){
        return (
            <div className={style.wines_left_header_container}>
                <div className={style.showme_showall}>
                    <div className={style.showme}>
                        show me
                    </div>
                    <div className={style.showall}>
                        show all
                    </div>
                </div>
                <div className={style.category_container}>
                    <Category onCatClicked={this.props.handleCategoryClicked} categoryname='white' />
                    <Category onCatClicked={this.props.handleCategoryClicked} categoryname='red' />
                    <Category onCatClicked={this.props.handleCategoryClicked} categoryname='sparkling' />
                    <Category onCatClicked={this.props.handleCategoryClicked} categoryname='price' />
                    <Category onCatClicked={this.props.handleCategoryClicked} categoryname='vintage' />
                </div>
            </div>
        )
    }
}

export default LeftHeader;
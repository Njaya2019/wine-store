import React from 'react';
import style from './wines_header.css';
import Category from './category/category';

const LeftHeader = (props) =>{
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
                <Category categoryname='white' />
                <Category categoryname='red' />
                <Category categoryname='sparkling' />
                <Category categoryname='price' />
                <Category categoryname='vintage' />
            </div>
        </div>
    )
}

export default LeftHeader;
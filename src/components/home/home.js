import React from 'react';
import style from './home.css'
import Wines_list from '../wines_list/wines_list';
import LeftHeader from '../wines_header/wines_header';
import RightHeader from '../wines_header/right_container/right_container';

const Home = () => {

    return (
        <div className={style.home_container}>
            <div className={style.left_header} >
                <LeftHeader />
            </div>
            <div className={style.right_header} >
                <RightHeader />
            </div>
            <div className={style.wines_body}>
                <Wines_list />
            </div>

            
            
        </div>
    )
}

export default Home;
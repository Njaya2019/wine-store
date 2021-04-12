import React from 'react';
import style from './home.css'
import Wines_list from '../wines_list/wines_list';
import Wines_Header from '../wines_header/wines_header';

const Home = () =>{

    return(
        <div className={style.home_container}>
            <Wines_Header />
            <Wines_list />
        </div>
    )
}

export default Home;
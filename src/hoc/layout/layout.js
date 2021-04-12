import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './layout.css';

const Layout = (props) =>{
    return(
        <div className={styles.layout_wrapper}>
            <Header/>
                    {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;
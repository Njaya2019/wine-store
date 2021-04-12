import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './header.css';

const Header = () =>{
    return(
        <div className={styles.header_wrapper}>

            <div className={styles.left_nav_item}>
                <Link to='/'>Wine store</Link>
            </div>

            {/* <div className={styles.right_nav_item}>
                <NavLink  
                    to='/signin' 
                    className={styles.signin_link}
                    activeStyle={{
                        borderBottom: '5px solid rgb(0, 0, 0)'
                    }}
                >SignIn</NavLink >
                <NavLink 
                    to='/signup'
                    className={styles.signup_link}
                    activeStyle={{
                        borderBottom: '5px solid rgb(0, 0, 0)'
                    }}
                >SignUp</NavLink >
            </div> */}

        </div>
    )
}

export default Header;
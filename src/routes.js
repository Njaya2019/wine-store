import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from './hoc/layout/layout';
import Home from './components/home/home';
// import SignUp from './components/auth/signup/signup';
// import SignIn from './components/auth/signin/signin';

const Routes = (props) =>{

    return(
        <Layout>
            <Switch>
                {/* <Route path='/signin' exact component={SignIn}/> */}
                {/* <Route path='/signup' exact component={SignUp}/> */}

                <Route path='/' exact component={Home}/>

                {/* A fall back if none of the above routes matches */}
                <Route render={()=><h1>Oops 404</h1>}/>
            </Switch>
        </Layout>
        
    )
}

export default Routes;
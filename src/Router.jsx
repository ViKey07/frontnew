import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';
import ContactForm from './containers/ContactForm';
import ThankYou from './containers/ThankYou';
import ItemsPage from './containers/ItemsPage';



const Router = () => {

    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path="/items" component={ItemsPage} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/contact'} component={ContactForm} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/shipping'} component={Shipping} />
                <Route exact path={'/thankyou'} component={ThankYou} />
            </Switch>
        </>
    );
};
export default Router;







import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';
import ThankYou from './containers/ThankYou';
import ItemsPage from '../src/containers/ItemsPage';
import ContactForm from './containers/ContactForm';
import PaymentsForm from './containers/PaymentsForm';



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
                <Route exact path={'/payment'} component={PaymentsForm} />
                <Route exact path={'/thankyou'} component={ThankYou} />
            </Switch>
        </>
    );
};
export default Router;







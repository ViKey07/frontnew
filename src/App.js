// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Router from './Router';
// import './assets/style.css';
// import Header from './components/Common/Header';
// import { getUser } from './reducks/users/selectors';
// import { fetchUserFromLocalStorage } from './reducks/users/operations';
// import { getSubtotal } from './reducks/carts/selectors';
// import CartButton from './components/Common/CartButton';
// import { BrowserRouter } from 'react-router-dom';

// // import Footer from './components/Common/Footer';


// let pageUrl = window.location.toString();

// function App() {
//     const [showFooter, setShowFooter] = useState(true);
//     const dispatch = useDispatch();
//     const selector = useSelector(state => state);
//     const user = getUser(selector);
//     const subtotal = getSubtotal(selector);

//     const handleCartButtonClick = () => {
//         // utility function to handle the routing logic
//         window.location.href = '/cart';
//     };

//     useEffect(() => {
//         if (pageUrl.includes('Shipping') || pageUrl.includes('thankyou')) {
//             setShowFooter(false);
//         }
//         dispatch(fetchUserFromLocalStorage());
//     }, []);


//     return (
//         <>
//             <BrowserRouter>
//             <Header />
//             <Router />
//             <CartButton onCartButtonClick={handleCartButtonClick} />
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router';
import './assets/style.css';
import Header from './components/Common/Header';
import { getUser } from './reducks/users/selectors';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getCarts, getSubtotal } from './reducks/carts/selectors';
import CartButton from './components/Common/CartButton';
import { BrowserRouter } from 'react-router-dom';

let pageUrl = window.location.toString();

function App() {
    const [showFooter, setShowFooter] = useState(true);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    const handleCartButtonClick = () => {
        // utility function to handle the routing logic
        window.location.href = '/cart';
    };

    const cartQuantity = carts.reduce((total, cart) => total + cart.quantity, 0);

    useEffect(() => {
        if (pageUrl.includes('Shipping') || pageUrl.includes('thankyou')) {
            setShowFooter(false);
        }
        dispatch(fetchUserFromLocalStorage());
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Router />
                {cartQuantity > 0 ? <CartButton onCartButtonClick={handleCartButtonClick} /> : null}
            </BrowserRouter>
        </>
    );
}

export default App;




            {/* {showFooter && <Footer price={subtotal} />} */}


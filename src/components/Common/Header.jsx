import React, { useEffect, useState } from 'react';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import cart from '../../assets/img/cart_b(5).png';
import logo from '../../assets/img/blue_logo.png';
import user from '../../assets/img/user.svg';
import { getCarts } from '../../reducks/carts/selectors';
import { useSelector } from 'react-redux';
// import ContactForm from '../../containers/ContactForm';

export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const carts = useSelector(getCarts);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key !== null) {
            setCheckUser(true);
        }
    }, [key]);

    const totalItems = carts.reduce((acc, cart) => acc + cart.quantity, 0);

    return (
        <>
            <header>
                <div class="logo">
                    <a href="/">
                        {' '}
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <nav>
                    <ul className="navbar-links">
                        <li><a className='nav-l' href="/">Home</a></li>
                        <li><a className='nav-l' href="https://www.yearbookcanvas.com/yearbook/about-us">About</a></li>
                        <li><a className='nav-l' href="/contact">Contact</a></li>
                    </ul>

                    {checkUser ? (
                        <span className="signin" onClick={signOutButton}>
                            Logout
                        </span>
                    ) : (
                        <a class="signin" href="Signin">
                            <img src={user} alt="user" />
                        </a>
                    )}

                    <a className='cart-logo-link' href="/cart">
                        <div className="cart-icon-container">
                            <img src={cart} alt="cart" className="cart-icon" />
                            {totalItems > 0 && (
                                <span className="cart-item-count">{totalItems}</span>
                            )}
                        </div>
                    </a>
                </nav>
            </header>
        </>
    );
}







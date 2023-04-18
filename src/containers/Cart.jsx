import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { fetchCarts } from '../reducks/carts/operations';
import { fetchItems } from '../reducks/items/operations';
import { getCarts } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from '../reducks/users/selectors';
import { getItems } from '../reducks/items/selectors';
import PageFooter from '../components/Common/Footer';

const Cart = ({ showFooter, subtotal, checkUser }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    // const user = getUser(selector);
    const items = getItems(selector);
  
    useEffect(() => {
      dispatch(fetchItems());
      dispatch(fetchCarts());
    }, [dispatch]);

    const sortedCarts = carts.slice().sort((a, b) => {
        const aId = String(a.id);
        const bId = String(b.id);
        return aId.localeCompare(bId);
    });

    const cartIsEmpty = sortedCarts.every(cart => cart.quantity === 0);
  
    return (
        <>
            <section>
                <div className="cart-heading">
                    <p className='cart-head'>Cart</p>
                </div>
                {cartIsEmpty ? (
                    <p className='empty-cart'>Your cart is empty.</p>
                ) : (
                    <>
                    <div className="cart-item-img-name-head">
                        <div className="cart-img-i-n">
                            <p className="cart-t">Item</p>
                        </div>

                        <div className="cart-i-info">
                            <p className="cart-s">Size</p>
                            <p className="cart-c">Color</p>
                            <p className="cart-p">Price</p>
                            <p className="cart-q">Quantity</p>
                        </div>
                    </div>
                    <div className="images">
                        <ul className="menu">
                            {items &&
                                sortedCarts.map(cart => (
                                    <li className='ca-li'>
                                        <CartItem
                                            cart={cart.item}
                                            cartId={cart.id}
                                            key={cart.id}
                                            quantity={cart.quantity}
                                            size={cart.size}
                                            color={cart.color}
                                        />
                                    </li>
                                    
                                ))
                            }
                        </ul>
                    </div>
                    
                    
                    </>
                )}
            </section>
            {!cartIsEmpty && <PageFooter showFooter={showFooter} subtotal={subtotal} />}
            {checkUser && cartIsEmpty && (
                <div className="cart-empty-login">
                    <p>You need to be logged in to add items to your cart.</p>
                    <a href="/signin">Click here to login.</a>
                </div>
            )}
        </>
    );
};
  
export default Cart;

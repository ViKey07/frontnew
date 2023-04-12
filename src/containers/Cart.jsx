// import React, { useEffect, useState } from 'react';
// import CartItem from './CartItem';
// import { fetchCarts } from '../reducks/carts/operations';
// import { fetchItems } from '../reducks/items/operations';
// import { getCarts } from '../reducks/carts/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from '../reducks/users/selectors';
// import { getItems } from '../reducks/items/selectors';
// import PageFooter from '../components/Common/Footer';

// const Cart = ({ showFooter, subtotal }) => {
//     const selector = useSelector(state => state);
//     const dispatch = useDispatch();
//     const carts = getCarts(selector);
//     const user = getUser(selector);
//     const items = getItems(selector);
  
//     useEffect(() => {
//       dispatch(fetchItems());
//       dispatch(fetchCarts());
//     }, []);
  
//     // sort the items in the cart by their unique identifier
//     const sortedCarts = carts.slice().sort((a, b) => {
//         const aId = String(a.id);
//         const bId = String(b.id);
//         return aId.localeCompare(bId);
//       });
      
  
//     return (
//       <>
//         <section>
//           <div className="cart-heading">
//             <p className='cart-head'>Cart</p>
//           </div>
//           <div class="images">
//             <ul class="menu">
//               {
//                 (sortedCarts,
//                 items &&
//                   sortedCarts.map(cart => (
//                     <li className='ca-li'>
//                       <CartItem
//                         cart={cart.item}
//                         cartId={cart.id}
//                         key={cart.id}
//                         quantity={cart.quantity}
//                         size={cart.size}
//                         color={cart.color}
//                       />
//                     </li>
//                   )))
//               }
//             </ul>
//           </div>
//         </section>
//         <PageFooter showFooter={showFooter} subtotal={subtotal} />
//       </>
//     );
//   };
  
//   export default Cart;
  


import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { fetchCarts } from '../reducks/carts/operations';
import { fetchItems } from '../reducks/items/operations';
import { getCarts } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
import { getItems } from '../reducks/items/selectors';
import PageFooter from '../components/Common/Footer';

const Cart = ({ showFooter, subtotal }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUser(selector);
    const items = getItems(selector);
  
    useEffect(() => {
      dispatch(fetchItems());
      dispatch(fetchCarts());
    }, []);
  
    // sort the items in the cart by their unique identifier
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
                    <div class="images">
                        <ul class="menu">
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
                )}
            </section>
            {!cartIsEmpty && <PageFooter showFooter={showFooter} subtotal={subtotal} />}
        </>
    );
};
  
export default Cart;


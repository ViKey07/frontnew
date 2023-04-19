// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
// import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
// import { push } from 'connected-react-router';

// const Item = ({ item }) => {
//     const selector = useSelector(state => state);
//     const dispatch = useDispatch();
//     const carts = getCarts(selector);
//     const subtotal = getSubtotal(selector);
//     const [particularCart, setParticularCart] = useState(null);
//     const key = localStorage.getItem('LOGIN_USER_KEY');

//     useEffect(() => {
//         if (carts !== undefined && carts.length > 0) {
//             let matchedCarts = carts.filter(cart => cart.item.id === item.id);
//             if (matchedCarts.length > 0) {
//                 setParticularCart(matchedCarts[0]);
//             } else {
//                 setParticularCart(null);
//             }
//         }
//     }, [subtotal]);

//     const clickAddCart = () => {
//         if (key) {
//             dispatch(addCart(item));
//         } else {
//             dispatch(push('/signin'));
//         }
//     };
//     const clickPlusCart = () => {
//         dispatch(increaseCart(particularCart.id));
//     };
//     const clickMinusCart = () => {
//         dispatch(decreaseCart(particularCart.id));
//     };

//     return (
//         <>
//             <div className="item-background">
//                 <div className="item-image">
//                     <img src={item.image} alt="Items" />
//                 </div>
//             </div>
//             <div className="item-bottom">
//                 <div className="item-price">
//                     <p className='i-title'>{item.name}</p>
//                     <p className='i-price'>${item.price}</p>
//                 </div>
//                 <div className="item-details">
//                     <div className="item-color">
//                         <label htmlFor="color">Color:</label>
//                         <select id="color">
//                             <option value="red">Red</option>
//                             <option value="green">Green</option>
//                             <option value="blue">Blue</option>
//                         </select>
//                     </div>
//                     <div className="item-size">
//                         <label htmlFor="size">Size:</label>
//                         <select id="size">
//                             <option value="small">Small</option>
//                             <option value="medium">Medium</option>
//                             <option value="large">Large</option>
//                         </select>
//                     </div>
//                 </div>
//                 {particularCart && particularCart.quantity > 0 ? (
//                     <div className="added-cart">
//                         <div className="ad-c-b">
//                             <span id="minus" onClick={clickMinusCart}>
//                                 －
//                             </span>
//                             <span id="count">{particularCart.quantity}</span>
//                             <span id="plus" onClick={clickPlusCart}>
//                                 +
//                             </span>
//                         </div>
//                     </div>
//                 ) : (
//                     <button className='add-cart' onClick={clickAddCart}>
//                         ADD TO CART
//                     </button>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Item;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
import { push } from 'connected-react-router';

const Item = ({ item }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [particularCart, setParticularCart] = useState(null);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (carts !== undefined && carts.length > 0) {
            let matchedCarts = carts.filter(cart => cart.item.id === item.id);
            if (matchedCarts.length > 0) {
                setParticularCart(matchedCarts[0]);
            } else {
                setParticularCart(null);
            }
        }
    }, [subtotal]);

    const clickAddCart = () => {
        if (key) {
            dispatch(addCart(item));
        } else {
            dispatch(push('/signin'));
        }
    };
    const clickPlusCart = () => {
        dispatch(increaseCart(particularCart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(particularCart.id));
    };

    return (
        <>
            <div className="item-background">
                <div className="item-image">
                    <img src={item.image} alt="Items" />
                </div>
            </div>
            <div className="item-bottom">
                <div className="item-price">
                    <p className='i-title'>{item.name}</p>
                    <p className='i-price'>${item.price}</p>
                </div>
                {item.size && item.color ? (
                    <div className="item-details">
                        <div className="item-color">
                            <label htmlFor="color">Color:</label>
                            <select id="color">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                        <div className="item-size">
                            <label htmlFor="size">Size:</label>
                            <select id="size">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>
                ) : null}
                {particularCart && particularCart.quantity > 0 ? (
                    <div className="added-cart">
                        <div className="ad-c-b">
                            <span id="minus" onClick={clickMinusCart}>
                                －
                            </span>
                            <span id="count">{particularCart.quantity}</span>
                            <span id="plus" onClick={clickPlusCart}>
                                +
                            </span>
                        </div>
                    </div>
                ) : (
                    <button className='add-cart' onClick={clickAddCart}>
                        ADD TO CART
                    </button>
                )}
            </div>
        </>
    );
};

export default Item;
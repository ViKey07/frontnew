// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
// import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
// import Item from './Item'

// const CartItem = ({ cart, quantity, cartId }) => {
//     const selector = useSelector(state => state);
//     const dispatch = useDispatch();
//     const carts = getCarts(selector);
//     const subtotal = getSubtotal(selector);

//     const clickPlusCart = () => {
//         dispatch(increaseCart(cartId));
//     };
//     const clickMinusCart = () => {
//         dispatch(decreaseCart(cartId));
//     };

//     useEffect(() => {
//         console.log(cart.image);
//         console.log(cart);
//         console.log(carts);
//     }, []);

//     return (
//         <>
//             <div className="circle">
//                 <img src={'https://res.cloudinary.com/www-techis-io/' + cart.image} />
//             </div>
//             <h3>{cart.name}</h3>
//             <h6>{quantity}</h6>
//             <p>${cart.price}</p>

//             <button class="number">
//                 <span id="minus" onClick={clickMinusCart}>
//                     －
//                 </span>
//                 <span id="count">{quantity}</span>
//                 <span id="plus" onClick={clickPlusCart}>
//                     +
//                 </span>
//             </button>
//         </>
//     );
// };

// export default CartItem;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../reducks/carts/operations';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import Item from '../components/Common/Item'

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [selectedSize, setSelectedSize] = useState(cart.size);
    const [selectedColor, setSelectedColor] = useState(cart.color);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(cart.image);
        console.log(cart);
        console.log(carts);
    }, []);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <>
            <div className="circle">
                <img src={'https://res.cloudinary.com/www-techis-io/' + cart.image} />
            </div>
            <h3>{cart.name}</h3>
            {/* <h6>Size:</h6> */}
            <select value={selectedSize} onChange={handleSizeChange}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
            {/* <h6>Color:</h6> */}
            <select value={selectedColor} onChange={handleColorChange}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            {/* <h6>Quantity:</h6> */}
            <p>${cart.price}</p>

            <button class="number">
                <span id="minus" onClick={clickMinusCart}>
                    －
                </span>
                <span id="count">{quantity}</span>
                <span id="plus" onClick={clickPlusCart}>
                    +
                </span>
            </button>
        </>
    );
};

export default CartItem;



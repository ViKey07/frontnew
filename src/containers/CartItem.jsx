import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../reducks/carts/operations';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
// import Item from '../components/Common/Item'

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

        <div className="cart-item-img-name">
            <div className="circle">
                <img src={'https://res.cloudinary.com/www-techis-io/' + cart.image} alt=''/>
            </div>

            <div className="cart-item-name">
                <p className='c-i-a'>{cart.name}</p>
                <p className="c-i-a-s">Style: Full Sleves</p>
                <div className="giftbox">
                    {/* <img src="" alt={Gift} className="gift" /> */}
                    <p className="gift-txt">YBC GIFT BOX ADDED</p>
                </div>
            </div>
        </div>
            {/* <h6>Size:</h6> */}
        <div className="cart-item-info">
            <div className="cart-item-size">
                <select value={selectedSize} onChange={handleSizeChange}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>
            {/* <h6>Color:</h6> */}
            <div className="cart-item-color">
                <select value={selectedColor} onChange={handleColorChange}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
            {/* <h6>Quantity:</h6> */}
            <div className="cart-item-price">
                <p>${cart.price}</p>
            </div>

            <div className="cart-item-button">
                <button class="number">
                    <span id="minus" onClick={clickMinusCart}>
                        －
                    </span>
                    <span id="count">{quantity}</span>
                    <span id="plus" onClick={clickPlusCart}>
                        +
                    </span>
                </button>
            </div>
        </div>
        </>
    );

    
};

export default CartItem;







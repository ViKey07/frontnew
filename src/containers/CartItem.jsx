import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../reducks/carts/operations';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import GiftImg from '../../src/assets/img/gift_logo.png';
// import Item from '../components/Common/Item'

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [selectedSize, setSelectedSize] = useState(cart.size);
    const [selectedColor, setSelectedColor] = useState(cart.color);
    const [giftboxAdded, setGiftboxAdded] = useState(false);

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

    const handleAddGiftbox = () => {
        setGiftboxAdded(true);
    };

    const handleRemoveGiftbox = () => {
        setGiftboxAdded(false);
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
                {/* <div className="giftbox">
                    <p className="gift-txt">YBC GIFT BOX ADDED</p>
                </div> */}
                <div className="giftbox">
                    
                        {!giftboxAdded ? (
                            <a onClick={handleAddGiftbox} className="add-giftbox-btn">
                                <img className='giftimg' src={GiftImg} alt="" />
                                Add YBC GIFT BOX
                            </a>
                        ) : (
                            <div className="giftbox-added">
                                <div className="gb-a">
                                <p className="gift-txt">
                                <img className='giftimg' src={GiftImg} alt="" />
                                    YBC GIFT BOX Added</p>
                                </div>
                                <a onClick={handleRemoveGiftbox} className="remove-giftbox-link">
                                    Remove Giftbox
                                </a>
                            </div>
                        )}
                        
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







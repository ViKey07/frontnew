import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/CartButton.css';
import cart from '../../assets/img/cart_w(5).png';

const CartButton = ({ onCartButtonClick }) => {
  const handleCartButtonClick = () => {
    onCartButtonClick();
  };

  return (
    <div className="floating-cart-button" onClick={handleCartButtonClick}>
      <img className="cart-icon" src={cart} alt=''></img>
    </div>
  );
};

CartButton.propTypes = {
  onCartButtonClick: PropTypes.func.isRequired,
};

export default CartButton;




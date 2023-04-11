import React, { useEffect, useState } from 'react';


export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <footer>
            {key !== null && (
                <div class="foot">
                    {/* <h2>total: ${price}</h2>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button class="btn">Check Your Cart</button>
                        </a>
                    ) :  */}
                    {( 
                        <a href="/Shipping">
                            <button class="btn">Checkout</button>
                        </a>
                    )}
                </div>
            )}
            
        </footer>
    );
}

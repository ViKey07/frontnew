import React, { useEffect, useRef } from 'react';
import { getItems } from '../reducks/items/selectors';
import Item from '../components/Common/Item';
import { fetchItems } from '../reducks/items/operations';
import { fetchCarts } from '../reducks/carts/operations';
import { useDispatch, useSelector } from 'react-redux';



function ItemsPage() {
    const selector = useSelector(state => state);
    const items = getItems(selector);
    const dispatch = useDispatch();
    const itemRef = useRef(null);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);


  return (
    <>
    <div className="product-heading">
                <h2 className='product-list'>Product-List</h2>
            </div>
            <section className="item-container" ref={itemRef}>
                <div className="item-grid">
                    {items &&
                        items.map(item => (
                            <div className="item">
                                <Item key={item.id} item={item} />
                            </div>
                        ))}
                </div>
            </section>
            </>
  )
}

export default ItemsPage
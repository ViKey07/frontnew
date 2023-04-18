import React, { useEffect, useRef } from 'react';
import Item from '../components/Common/Item';
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import { useDispatch, useSelector } from 'react-redux';
import CustomCategoryButtons from './Grid';
import SupportFms from './SupportFms.jsx'
import MainImage from '../assets/img/sale_offer.png';
import { fetchCarts } from '../reducks/carts/operations';
import Carousel from './Car';
import CImg1 from '../assets/img/clg_img1.png';
import CImg2 from '../assets/img/clg_img2.png';
import CImg3 from '../assets/img/clg_img3.png';
import NewsLetter from './SignLetter.jsx';
import ServiceBar from './ServiceBar';
import ItemsPage from './ItemsPage';
import ProductsSec from './ProductsSec';
import FMSLOGO from '../assets/img/FMSLOGO.png'
// import Footer from './components/Common/Footer.jsx';
// import PageFooter from '../components/Common/Footer';


const Home = ({ showFooter, subtotal }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);
    const itemRef = useRef(null);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);

    function handleShopNowClick() {
        // itemRef.current.scrollIntoView({ behavior: 'smooth' });
        window.location.href = '/items';
    }

    return (
        <>
            <section class="main-image">
                <div className="home-images">
                    <div className="home-logo-sec">
                        <img className='home-fms-logo' src={FMSLOGO} alt="" />
                    </div>

                    <div className="offer">
                        <img className='home-offer-img' src={MainImage} alt="main-img" />
                        <div className="shop-btn">
                            <button className='shop-now' onClick={handleShopNowClick}>Shop Now</button>
                        </div>
                    </div>
                </div>
                
            </section>

            <Carousel />

            

            <div className="product-heading">
                <h2 className='product-list'>Categories</h2>
            </div>

            <CustomCategoryButtons handleShopNowClick={handleShopNowClick} />

            <div className="product-heading">
                <h2 className='product-list'>Best Selling</h2>
            </div>

            <ProductsSec />

            {/* <ItemsPage /> */}

            {/* <div className="product-heading">
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
            </section> */}


            <SupportFms handleShopNowClick={handleShopNowClick} />

            <div className="product-heading">
                <h2 className='product-list'>Products</h2>
            </div>

            <div className="cat-links">
                {/* <ul className="navbar-links"> */}
                    <li><a className='nav-l-2' href="/items">All</a></li>
                    <li><a className='nav-l-2' href="/items">Apparel</a></li>
                    <li><a className='nav-l-2' href="/items">Stationary</a></li>
                    <li><a className='nav-l-2' href="/items">Mugs</a></li>
                    <li><a className='nav-l-2' href="/items">Bottles</a></li>
                    <li><a className='nav-l-2' href="/items">Rings</a></li>
                    <li><a className='nav-l-2-b' href="/items">Bands</a></li>
                {/* </ul> */}
            </div>

            <ProductsSec />

            <ServiceBar />

            <section className="new-latest">
            <div className="product-heading">
                <h2 className='product-list'>New Latest</h2>
            </div>
                {/* <p className="n-l">New Latest</p> */}
                <div className="new-latest-img">
                    <img src={CImg1} alt="" className="c-img" />
                    <img src={CImg2} alt="" className="c-img" />
                    <img src={CImg3} alt="" className="c-img" />
                </div>
            </section>

            <NewsLetter />
        </>
    );
};

export default Home;



            {/* <PageFooter showFooter={showFooter} subtotal={subtotal} /> */}

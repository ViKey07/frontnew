import React from 'react'
import { Link } from 'react-router-dom';
import Hoodie from '../assets/img/Asset 81.png';
import Tshirt from '../assets/img/800/Asset 612.png';
import Diary from '../assets/img/Artboard 12.png';
import Mug from '../assets/img/800/Asset 71.png';
import '../containers/ProductsSec.css';

function ProductsSec() {
  return (
    <>
    
            <section className="item-container">
                <div className="item-grid">
                    <button className='item-cat-btn'>
                        <a className='item-btn-link' href="/items">
                            <div className="item-cards">
                                <div className="img-bg">
                                    <img className='h-img' src={Hoodie} alt="" />
                                </div>
                                <p className="item-title">White FMS hoodie <br /> latest edition</p>
                                <p className="item-price">$80</p>
                                <div className="dots">
                                    <p id='dot-green'>&#x2022;</p>
                                    <p id='dot-red'>&#x2022;</p>
                                    <p id='dot-blue'>&#x2022;</p>
                                </div>
                            </div>
                        </a>
                    </button>

                    <button className='item-cat-btn'>
                        <a className='item-btn-link' href="/items">
                            <div className="item-cards">
                                <div className="img-bg">
                                    <img className='m-img' src={Mug} alt="" />
                                </div>
                                <p className="item-title">Red FMS mug <br /> latest edition</p>
                                <p className="item-price">$80</p>
                                <div className="dots">
                                    <p id='dot-green'>&#x2022;</p>
                                    <p id='dot-red'>&#x2022;</p>
                                    <p id='dot-blue'>&#x2022;</p>
                                </div>
                            </div>
                        </a>
                    </button>
                    
                    <button className='item-cat-btn'>
                        <a className='item-btn-link' href="/items">
                            <div className="item-cards">
                                <div className="img-bg">
                                    <img className='d-img' src={Diary} alt="" />
                                </div>
                                <p className="item-title">Red FMS diary <br /> latest edition</p>
                                <p className="item-price">$80</p>
                                <div className="dots">
                                    <p id='dot-green'>&#x2022;</p>
                                    <p id='dot-red'>&#x2022;</p>
                                    <p id='dot-blue'>&#x2022;</p>
                                </div>
                            </div>
                        </a>
                    </button>

                    <button className='item-cat-btn'>
                        <a className='item-btn-link' href="/items">
                            <div className="item-cards">
                                <div className="img-bg">
                                    <img className='t-img' src={Tshirt} alt="" />
                                </div>
                                <p className="item-title">Red FMS tshirts <br /> latest collection</p>
                                <p className="item-price">$80</p>
                                <div className="dots">
                                    <p id='dot-green'>&#x2022;</p>
                                    <p id='dot-red'>&#x2022;</p>
                                    <p id='dot-blue'>&#x2022;</p>
                                </div>
                            </div>
                        </a>
                    </button>

                </div>
            </section>
    </>
  )
}

export default ProductsSec
import { useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingcart from '../assets/shopping-cart.svg';
import home from '../assets/home.svg';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const productsCount = useSelector((state) => state.products);

    return(
        <nav>
            <h3>E-Commerce</h3>
            <div className='navigations'>
                <Link className='cart-button' to='/'>
                    <img src={home} width="30" height="30" alt="shopping-cart" />
                </Link>
                <Link className='cart-button' to='/yourCart'>
                    <img src={shoppingcart} width="30" height="30" alt="shopping-cart" />
                    {productsCount.length !== 0 ? <span>{productsCount.length}</span> : <></>}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
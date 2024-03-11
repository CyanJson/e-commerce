import { useState } from 'react';
import shoppingcart from '../assets/shopping-cart.svg';
import shoppingcartcheck from '../assets/shopping-cart-check.svg';

const Products = ({productImage, productName, productSize, productPrice, addToCart}) => {
    const [added, setAdded] = useState(false);

    return(
        <div className="product">
            <div 
                className="img" 
                style={{ backgroundImage: `url('${productImage}')` }}
            ></div>
            <div className="text">
                <span className="product-name">{productName}</span>
                <span>Size: {productSize}</span>
                <span>{productPrice} PHP</span>
            </div>
            <button 
                onClick={() => {
                    if(!added) addToCart(); 
                    setAdded(true); 
                }}
                style={{ opacity: added ? .7 : '', boxShadow: added ? 'none' : ''}}
            >
                <img src={added ? shoppingcartcheck : shoppingcart} width="18" height="18" alt="shopping-cart" />
                {added ? 'added' : 'add to cart'}
            </button>
        </div>
    )
}

export default Products
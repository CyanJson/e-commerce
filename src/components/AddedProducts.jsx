import { useState } from 'react';
import shoppingcart from '../assets/cart-minus.svg';

const AddedProducts = ({productImage, productName, productSize, productPrice, removeToCart, placeOrder}) => {
    const [quantity, setQuantity] = useState(1);

    return(
        <div className="product">
            <div 
                className="img" 
                style={{ backgroundImage: `url('${productImage}')` }}
            ></div>
            <div className="text">
                <span className="product-name">{productName}</span>
                <span>Size: {productSize}</span>
                <span>Price: ₱ {productPrice}</span>
                <span>Total price: ₱ {productPrice * quantity}</span>
            </div>

            <div className="quantity">
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                <span>{quantity}</span>
                <button onClick={() => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)}>-</button>
            </div>

            <button onClick={removeToCart} className="removeToCart">
                <img src={shoppingcart} width="18" height="18" alt="shopping-cart" />
                remove to cart
            </button>
            <button onClick={placeOrder} className="placeOrder">
                place order
            </button>
        </div>
    )
}

export default AddedProducts
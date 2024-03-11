import shoppingcart from '../assets/cart-minus.svg';

const AddedProducts = ({productImage, productName, productSize, productPrice, removeToCart}) => {
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
            <button onClick={removeToCart} className="removeToCart">
                <img src={shoppingcart} width="18" height="18" alt="shopping-cart" />
                remove to cart
            </button>
        </div>
    )
}

export default AddedProducts
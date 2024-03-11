import shoppingcart from '../assets/shopping-cart.svg';

const Products = ({productImage, productName, productSize, productPrice, addToCart}) => {
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
            <button onClick={addToCart}>
                <img src={shoppingcart} width="18" height="18" alt="shopping-cart" />
                add to cart
            </button>
        </div>
    )
}

export default Products
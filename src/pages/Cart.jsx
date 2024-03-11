import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from '../redux/ecommerceSlice';
import AddedProducts from "../components/AddedProducts";

const Cart = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const deleteToCart = (id) => dispatch(removeToCart(id));
    
    console.log(products);

    return(
        <div className="container">
            <main>
                {products.length === 0 ?
                    <h3>Nothing to see here.</h3>
                    :
                    <div className="products">
                        {products.map((data) => (
                            <AddedProducts
                                key={data.id}
                                productImage={data.product.productImage}
                                productName={data.product.productName}
                                productSize={data.product.productSize}
                                productPrice={data.product.productPrice}
                                removeToCart={() => deleteToCart(data.id)}
                            />
                        ))}
                    </div>
                }
            </main>
        </div>
    )
}

export default Cart
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ecommerceSlice";

import Products from "../components/Products";

const Home = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const addtocart = (data) => {
        dispatch(addToCart(data));
    }

    async function getProducts(){
        const response = await fetch('../src/data/products.json');
        const json = await response.json();
        setProducts(json);
    }

    useEffect(() => { 
        getProducts();
    }, []);

    return(
        <div className="container">
            <main>
                <div className="products">
                    {products.map((data) => (
                        <Products
                            key={data.productId} 
                            productImage={data.productImage}
                            productName={data.productName}
                            productSize={data.productSize}
                            productPrice={data.productPrice}
                            addToCart={() => addtocart(data)}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Home
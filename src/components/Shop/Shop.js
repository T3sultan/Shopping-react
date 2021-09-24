import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);



    useEffect(() => {
        console.log('api called')

        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                //    console.log('recieved')
                setDisplayProducts(data)

            })

    }, []);



    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key])
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])




    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product)

        //save to loacl storage
        addToDb(product.key);

    }


    const handleSearch = event => {
        // console.log(event.target.value);
        const searchText = (event.target.value);
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchProducts.length)
        setDisplayProducts(matchProducts)

    }


    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="search product"
                    onChange={handleSearch}
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h3>Products:{products.length}</h3> */}
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        >

                        </Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>

        </>


    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]); //first e data load 
    //outside theke data load hoi jeta kina side effect tai use korte 
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    // state immutable set diye change kora lagbe 
    const handleAddToCart = (product) =>{
       const newCart = [...cart,product];
       setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                 {
                    products.map(product => <Product
                    key = {product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}>

                    </Product>)
                 }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
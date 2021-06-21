import React, { useEffect, useState } from 'react'
import { commerce } from './lib/commerce'
import {Products, Navbar} from './components/index'

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () =>{
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () =>{
        setCart(await commerce.cart.retrieve());
    }

    const addCArt = async ({productId, quantity}) =>{
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[])

    console.log(cart);

    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCart={addCArt}/>
        </div>
    )
}

export default App

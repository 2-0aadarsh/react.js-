import instance from "../utils/axios";
import { useEffect, useState } from "react";

function Products() {
      
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const api = 'products';
        instance.get(api)
        .then((response) => {
            setProducts(response.data); 
            console.log("Fetched Products: ", response.data); // Log after fetching
        })
        .catch(err => console.log(err));
    };

    useEffect(()=>{
        getProducts();
        console.log("product section is created");

        return () => console.log("product section is deleted");
    },[])
 
      return (
        <div>
            {products.length == 0 ? <div className="text-5xl flex items-center justify-center min-h-[42.5rem]">Loading...</div> : products.map((product, index) => (<h1   
                                        className="px-2 py-3 bg-pink-500 mb-2 mt-3 min-w-1/2 w-1/2 mx-auto  text-center capitalize font-bold text-xl"
                                         key={index}>{product.title}</h1>))}
        </div>
  )
}

export default Products
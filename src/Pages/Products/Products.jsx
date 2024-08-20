import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then(data =>{
            setProducts(data.data)
        })
    },[])


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 container mx-auto">
            {
                products.map((prod, idx) => <ProductCard key={idx} product={prod}></ProductCard>)
            }
        </div>
    );
};

export default Products;
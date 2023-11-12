import React, { useState, useEffect } from "react";

const getData = () => {
    const [ products, setProducts ] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
              return response.json();
            })
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
    return { products, error, loading }
}

const PrintData = () => {
    const { products, error, loading } = getData();

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
  
    console.log(products)
}

export default PrintData
import React, { useState, useEffect } from "react";

// const getUrl = ( category = 'jewelery' ) => {
//     return (
//         'https://fakestoreapi.com/products/category/' +
//         category  
//     );
// }
// console.log(getUrl)

// const getCategories = () => {
//     const [ categories, setCategories ] = useState(null)
//     const [ categoriesError, setError ] = useState(null);
//     const [ categoriesLoading, setLoading ] = useState(true)

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products/categories')
//         .then((response) => {
//             if (response.status >= 400) {
//                 throw new Error("server error");
//               }
//               return response.json();
//             })
//         .then((response) => setCategories(response))
//         .catch((error) => setError(error))
//         .finally(() => setLoading(false));
//     }, []);

//     console.log(categories)

//     return { categories, categoriesError, categoriesLoading }
// }

export const getDataWomen = () => {
    const [ products, setProducts ] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
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

export const PrintData = () => {
    const { products, error, loading } = getDataWomen();
    // const { categories, error, loading } = getCategories();

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
  
    // console.log(categories[0])
    // console.log(products[0])
}
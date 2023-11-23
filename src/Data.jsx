import { useState, useEffect } from "react";

export const otherData = [
    {
        "women's clothing": {
        },
    },
    {
        "men's clothing": {
        },
    },
    {
        "jewelery": {
        },
    },
    {
        "electronics": {
        },
    },
]

export default function getCategoryData(categoryUrl){
    const [ categories, setCategory] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(categoryUrl)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
              return response.json();
            })
        .then((response) => setCategory(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [])
    
    return { categories, error, loading }
}
import { useState, useEffect } from "react";

//locat storage function
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export const otherData = [
    {
        "category" : "women's clothing",
        "bgFirstUrl": "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "bgFirstUrlbackgroundPosition" : "50% 20%",
        "bgShopMainUrl": "https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        "category" : "men's clothing",
        "bgFirstUrl": "https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "bgFirstUrlbackgroundPosition" : "50% 50%",
        "bgShopMainUrl": "https://images.pexels.com/photos/5935748/pexels-photo-5935748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "category" : "jewelery",
        "bgFirstUrl": "https://images.pexels.com/photos/279183/pexels-photo-279183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "bgFirstUrlbackgroundPosition" : "50% 50%",
        "bgShopMainUrl": "https://images.pexels.com/photos/11179276/pexels-photo-11179276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        "category" : "electronics",
        "bgFirstUrl": "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "bgFirstUrlbackgroundPosition" : "50% 50%",
        "bgShopMainUrl": "https://images.pexels.com/photos/1921673/pexels-photo-1921673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
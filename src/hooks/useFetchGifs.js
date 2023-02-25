import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setTimeout(3000);
        setIsLoading(false);
    };
        
    useEffect(() => {
        getImages();
    }, []);
  
    
  
    return {
        images, 
        isLoading
    }
    
}




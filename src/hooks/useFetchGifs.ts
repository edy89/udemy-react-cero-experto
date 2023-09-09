import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";


export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async (): Promise<void> => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading,
    }
}

import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

interface useFetchGifsI {
    images: {
        id: string;
        title: string;
        url: string;
    }[],
    isLoading: boolean;
}

export const useFetchGifs = (category: string): useFetchGifsI => {
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

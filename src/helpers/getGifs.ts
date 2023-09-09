export interface GetGifsPropsImageI {
    id: string;
    title: string;
    images: {
            downsized_medium: {
                url: string;
            };
    };
  }

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ULlQqhs0aTJq6EtNa0nOT0fv9VfJSPgZ&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map((image: GetGifsPropsImageI) => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));
    
    return gifs;
}
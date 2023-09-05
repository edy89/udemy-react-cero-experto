import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface GifGridPropsI {
    category: string;
}

interface PropsImageI {
    id: string;
    title: string;
    url: string;
}


export const GifGrid: React.FC<GifGridPropsI> = ({category}) => {

  const {images, isLoading} = useFetchGifs(category); // This a custom hook!
    

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {
            images.map((image: PropsImageI) => (
              <GifItem 
                key={image.id}
                { ...image }
                // title={title}
                // url={url}
              />
            ))
            // images.map((image: GetGifsPropsImageI) => (
            //   <li key={image.id}>{image.title}</li>
            // ))
          }
        </div>
        <p>This is a parragraph</p>
    </>
  )
}

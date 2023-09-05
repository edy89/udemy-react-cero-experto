
interface CardPropsImageI {
    title: string;
    url: string;
}

export const GifItem: React.FC<CardPropsImageI> = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}

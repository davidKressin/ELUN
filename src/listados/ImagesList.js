import { ImageItem } from '../items/ImageItem';

export const ImagesList = ({ data, onClick }) => {
    return (
      <>
        {
          data.map((x) => <ImageItem key={x.id} onClick={onClick} id={x.id} title={x.title} created_at={x.created_at} />)
        }
      </>
    )
  }
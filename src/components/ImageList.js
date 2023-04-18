import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div>
      ImageList {images.length}
      {images.map((image) => (
        <ImageShow data={image} key={image.id} />
      ))}
    </div>
  );
};

export default ImageList;

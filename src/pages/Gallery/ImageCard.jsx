import "./image-card.css";

function ImageCard({ url, caption }) {
  return (
    <div className="image-card">
      <img src={url} />
      <p className="image-card__caption">
        {caption ? caption : `Caption goes here`}
      </p>
    </div>
  );
}

export default ImageCard;

import "./ImageWithCaption.css";

function ImageWithCaption({image, caption, alt=""}) {

    return (
        <div className="imageContainer">
            <img className="imageImage" src={image} alt={alt} />
            <p className="imageCaption">{caption}</p>
        </div>
    );
};

export default ImageWithCaption;
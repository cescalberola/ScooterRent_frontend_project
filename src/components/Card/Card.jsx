import "./Card.scss";
import Counter from "../Counter/Counter.jsx";

const Card = (props) => {
  return (
    <>
    <article className="card">
      <div className="stickerPrice">{props.price}€</div>
      <div className="cardImgCont">
        <img src={props.img} />
      </div>
      <div className="cardTxtCont">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Counter counter={0} />
        <button>Add to Cart</button>
      </div>
      
    </article>
    </>
  );
};

export default Card;
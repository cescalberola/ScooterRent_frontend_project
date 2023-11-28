import "./Shop.scss";
import Card from "../Card/Card";

const Shop = (props) => {
  return (
    <>
      <div>
        <h1>Shop</h1>
        <div key={props.id} className="shopSection">
          <h2>{props.sectionTitle}</h2>
          <div className="shopSectionCards">
            {props.menuObject.map((menuItem) => {
              return (
                <Card
                  name={menuItem.name}
                  description={menuItem.description}
                  img={menuItem.img}
                  price={menuItem.price}
                  id={menuItem.id}
                  key={menuItem.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

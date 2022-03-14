import "./product.css";

const Product = ({ name, image, price }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={image} alt="" />
      <div className="price">{price}</div>
    </div>
  );
};

export { Product };

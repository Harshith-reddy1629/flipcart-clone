import "./index.css";

const ProductItem = ({ item }) => {
  const { name, price, preview } = item;
  return (
    <li className="product-item">
      <img src={preview} alt="." className="product-image" />
      <p className="product-name">{name}</p>
      <p className="product-price">Price {price} </p>
    </li>
  );
};

export default ProductItem;

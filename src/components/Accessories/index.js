import Products from "../json_files/products";

import "./index.css";
import ProductItem from "../ProductItem";

const Accessories = () => {
  return (
    <div className="product-sector">
      <div className="clothing-container">
        <h1 className="clothing-heading">Best of Accessories</h1>
        <ul className="clothing-list">
          {Products.slice(5, 12).map((each) => (
            <ProductItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
      <div className='img-container'>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/19bc292770c054a9.jpg?q=20"
          alt="."
          className="banner-img"
        />
      </div>
    </div>
  );
};

export default Accessories;

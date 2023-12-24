import "./index.css";

const CategoryItem = ({ item }) => {
  const { image, label } = item;

  return (
    <li className="category-item">
      <img height="70" src={image} alt={label} />
      <p className="category-name">{label}</p>
    </li>
  );
};

export default CategoryItem;

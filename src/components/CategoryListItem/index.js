import "./index.css";

const CategoryItem = ({ item }) => {
  const { image, label } = item;

  return (
    <li className="category-item">
      <img className="category-img" src={image} alt={label} />
      <p className="category-name">{label}</p>
    </li>
  );
};

export default CategoryItem;

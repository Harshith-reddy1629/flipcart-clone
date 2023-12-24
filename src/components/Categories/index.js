import category_list from "../json_files/categories";

import "./index.css";
import CategoryItem from "../CategoryListItem";

const Categories = () => (
  <div className="category-container">
    <ul className="categories-list-container">
      {category_list.map((each) => (
        <CategoryItem item={each} />
      ))}
    </ul>
  </div>
);

export default Categories;

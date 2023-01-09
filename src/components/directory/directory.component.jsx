import CategoryItem from "../category-item/category-item.component";
import "./directory.component.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id}></CategoryItem>
      ))}
    </div>
  );
};

export default Directory;

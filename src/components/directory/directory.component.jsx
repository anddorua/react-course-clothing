import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.component.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id}></DirectoryItem>
      ))}
    </div>
  );
};

export default Directory;

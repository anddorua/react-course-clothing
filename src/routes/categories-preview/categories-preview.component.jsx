import { Fragment } from "react";
import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.entries(categoriesMap).map(([categoryKey, shopItems]) => (
        <CategoryPreview
          key={categoryKey}
          title={categoryKey}
          products={shopItems}
        ></CategoryPreview>
      ))}
    </Fragment>
  );
};

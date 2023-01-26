import { Fragment, useContext } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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

import { Fragment } from "react";
import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.entries(categoriesMap).map(([categoryKey, shopItems]) => (
          <CategoryPreview
            key={categoryKey}
            title={categoryKey}
            products={shopItems}
          ></CategoryPreview>
        ))
      )}
    </Fragment>
  );
};

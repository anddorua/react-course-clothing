import { createSelector } from "reselect";

const selectCategorySubstate = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategorySubstate],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

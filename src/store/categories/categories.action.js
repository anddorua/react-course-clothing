import { CATEGORIES_ACTIONS } from "./categories.types";

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED,
  payload: error,
});

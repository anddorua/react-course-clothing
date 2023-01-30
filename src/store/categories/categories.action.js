import { CATEGORIES_ACTIONS } from "./categories.types";

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTIONS.SET_CATEGORIES,
  payload: categories,
});

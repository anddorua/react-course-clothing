import { CATEGORIES_ACTIONS } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

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

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const shopItems = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(shopItems));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};

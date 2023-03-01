import { CATEGORIES_ACTIONS } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { all, call, put, takeLatest } from "redux-saga/effects";

export function* fetchCategoriesAsync() {
  try {
    const shopItems = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(shopItems));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTIONS.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

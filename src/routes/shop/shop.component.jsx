import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { setCategories } from "../../store/categories/categories.action";
import "./shop.component.scss";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDocs = async () => {
      const shopItems = await getCategoriesAndDocuments();
      dispatch(setCategories(shopItems));
    };
    getDocs();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

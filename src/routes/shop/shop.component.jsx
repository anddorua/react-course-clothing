import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../category/category.component";

import { fetchCategoriesStart } from "../../store/categories/categories.action";
import "./shop.component.scss";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

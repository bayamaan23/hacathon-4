import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayoute from "../layots/MainLayoute";
import AddProductPage from "../pages/AddProductPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import SuccessPage from "../pages/SuccessPage";
import AuthPage from "../pages/AuthPage";
import CodeBar from "../components/codebar/CodeBar";
import Preview from "../components/Preview/Preview";
import StartPage from "../components/start/StartPage";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/compiler" element={<CodeBar />} />
        </Route>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;

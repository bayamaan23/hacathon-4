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
import PaymentPage from "../pages/PaymentPage";
import NewPage from "../pages/NewPage";
import TasksPage from "../pages/TasksPage";
import Task1 from "../components/tasks/task1";
import Task2 from "../components/tasks/Task2";
import Task3 from "../components/tasks/Task3";

import StartPage from "../components/start/StartPage";
import AboutUsPage from "../pages/AboutUsPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/newPage" element={<NewPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/compiler" element={<CodeBar />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Route>
      <Route path="/main" element={<AboutUsPage />} />
      <Route path="/" element={<StartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default MainRoutes;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import ToastiFy from "./components/ToastiFy";
import AuthContext from "./contexts/AuthContext";

import CompilerContext from "./contexts/CompilerContext";
import SavedContext from "./contexts/SavedContext";
import CommentsContext from "./contexts/CommentsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <CommentsContext>

      <CartContext>
        <SavedContext>
          <AuthContext>
            <CompilerContext>
              <ToastiFy />
              <App />
            </CompilerContext>
          </AuthContext>
        </SavedContext>
      </CartContext>
      </CommentsContext>
    </ProductContext>
  </BrowserRouter>
);

import React, { createContext, useContext, useReducer } from "react";
import { notify } from "../components/ToastiFy";
import { ACTIONS } from "../utils/consts";

const savedContext = createContext();

export function useSavedContext() {
  return useContext(savedContext);
}

const initState = {
  saved: {
    products: [],
    totalPrice: 0,
  },
  savedLength: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.saved:
      return { ...state, saved: action.payload };
    case ACTIONS.savedLength:
      return { ...state, savedLength: action.payload };
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("saved"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

function SavedContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  function getSaved() {
    const data = getDataFromLS();
    const quantity = data.products.reduce((acc, item) => acc + item.count, 0);

    dispatch({
      type: ACTIONS.savedLength,
      payload: quantity,
    });
    dispatch({
      type: ACTIONS.saved,
      payload: data,
    });
  }

  function addProductToSaved(product) {
    const data = getDataFromLS();
    data.products.push({ ...product, count: 1, subPrice: +product.price });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );

    localStorage.setItem("saved", JSON.stringify(data));
    getSaved();
    notify("Successfully added to saved!");
  }

  function deleteProductSaved(id) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => item.id !== id);
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("saved", JSON.stringify(data));
    getSaved();
    notify("Ooops removed from saved!");
  }

  function isAllReadyInSaved(id) {
    const data = getDataFromLS();
    const isInSaved = data.products.some((item) => item.id === id);
    return isInSaved;
  }

  function plusCount(id) {
    const data = getDataFromLS();
    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += +item.price;
      }
      return item;
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("saved", JSON.stringify(data));
    getSaved();
  }

  function minusCount(id) {
    const data = getDataFromLS();
    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= +item.price;
      }
      return item;
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("saved", JSON.stringify(data));
    getSaved();
  }

  function clearSaved() {
    localStorage.removeItem("saved");
    getSaved();
  }

  const value = {
    saved: state.saved,
    savedLength: state.savedLength,
    getSaved,
    addProductToSaved,
    deleteProductSaved,
    isAllReadyInSaved,
    plusCount,
    minusCount,
    clearSaved,
  };

  return (
    <savedContext.Provider value={value}>{children}</savedContext.Provider>
  );
}

export default SavedContext;

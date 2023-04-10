import React, { createContext, useContext, useState } from "react";
import { ACTIONS, files } from "../utils/consts";

export const editorContext = createContext();

export function useEditorCompiler() {
  return useContext(editorContext);
}

function CompilerContext({ children }) {
  const file = files;
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const value = {
    html,
    css,
    js,
    setHtml,
    setCss,
    setJs,
  };
  return (
    <editorContext.Provider value={value}>{children}</editorContext.Provider>
  );
}

export default CompilerContext;

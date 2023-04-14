import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import styles from "./codebar.css";
import Editor from "@monaco-editor/react";
import { files } from "../../utils/consts";
import Preview from "../Preview/Preview";
import {
  editorContext,
  useEditorCompiler,
} from "../../contexts/CompilerContext";
import { Box, display } from "@mui/system";


function CodeBar() {
  const editorRef = useRef(null);
  const { setCss, setHtml, setJs } = useEditorCompiler();
  const [fileName, setFileName] = useState("script.js");

  const [activeTab, setActiveTab] = useState("js");

  const file = files[fileName];

  useEffect(() => {
    editorRef.current?.focus();
  }, [file.name]);

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);
  return (
    <>
      <Box className="box-bar" sx={{ display: "flex" }}>
        <div className="codebar">
          <nav className="tab">
            <button
              disabled={fileName === "script.js"}
              onClick={() => {
                setFileName("script.js");
                setActiveTab("js");
              }}
              className={`item ${activeTab === "js" ? "activeTab" : ""}`}
            >
              JS
            </button>
            <button
              disabled={fileName === "style.css"}
              onClick={() => {
                setFileName("style.css");
                setActiveTab("css");
              }}
              className={`item ${activeTab === "css" ? "activeTab" : ""}`}
            >
              CSS
            </button>
            <button
              disabled={fileName === "index.html"}
              onClick={() => {
                setFileName("index.html");
                setActiveTab("html");
              }}
              className={`item ${activeTab === "html" ? "activeTab" : ""}`}
            >
              HTML
            </button>
          </nav>

          <div className="mainEditor">
            <Editor
              height="70vh"
              theme="vs-dark"
              path={file.name}
              defaultLanguage={file.language}
              defaultValue={file.value}
              onMount={(editor) => (editorRef.current = editor)}
              onChange={(e) => {
                if (file.language === "css") {
                  setCss(e);
                }
                if (file.language === "html") {
                  setHtml(e);
                }
                if (file.language === "javascript") {
                  setJs(e);
                }
              }}
            />
          </div>
        </div>
        <Preview />
      </Box>
        <div>
          <h1 className="name-bar">
            the compiler does not work on phone devices{" "}
          </h1>
        </div>
    </>
  );
}

export default CodeBar;

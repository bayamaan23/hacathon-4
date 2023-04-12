import React, { useContext, useMemo } from "react";
import styles from "./preview.css";
import {
  editorContext,
  useEditorCompiler,
} from "../../contexts/CompilerContext";
import { files } from "../../utils/consts";

function Preview() {
  const { html, css, js } = useContext(editorContext);
  console.log(html, css, js);
  const file = files;

  const document = useMemo(() => {
    if (!html && !css && !js) return;

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${css}body {
        background: #fff;
      }</style>
      </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
    </html>`;
  }, [html, css, js]);
  console.log(document);
  return (
    <div className="content">
      <div className="bar"></div>
      {document ? (
        <iframe title="preview" className="preview" srcDoc={document} />
      ) : (
        <div className="loading">Your code will be displayed here</div>
      )}
    </div>
  );
}

export default Preview;

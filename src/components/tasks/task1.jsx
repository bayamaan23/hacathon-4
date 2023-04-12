import React, { useContext } from "react";
import CodeBar from "../codebar/CodeBar";
import Preview from "../Preview/Preview";
import { editorContext } from "../../contexts/CompilerContext";
import "./task1.css";

function Task1() {
  const { html, css, js } = useContext(editorContext);
  let answer =
    "<h1>Welcome to the club, buddy</h1><p>First rule of fight club is...</p>";

  function checker() {
    if (html.replace(/\s/g, "") == answer.replace(/\s/g, "")) {
      alert("congrats!");
    } else {
      alert("you probably have mistake in your code");
    }
  }
  return (
    <>
      <h1 style={{ color: "bisque" }}>
        Выведите на экран заголовок первого уровня "Welcome to the club, buddy",
        а под ним параграф "First rule of fight club is..."
      </h1>
      <button
        onClick={() => {
          console.log(html.replace(/\s/g, ""));
          checker();
        }}
        className="check"
      >
        CHECK
      </button>
      <CodeBar />
    </>
  );
}

export default Task1;

import React, { useContext } from "react";
import CodeBar from "../codebar/CodeBar";
import { editorContext } from "../../contexts/CompilerContext";

function Task2() {
  const { html, css, js } = useContext(editorContext);
  let answer = "<button>Click me!</button>";
  let cssAnswer =
    "button{height:50px;width:100px;background-color:green;border-radius:4px;}";
  let cssAnswer2 =
    "button{height:50px;width:100px;background:green;border-radius:4px;}";

  function checker() {
    if (
      (html.replace(/\s/g, "") == answer.replace(/\s/g, "") &&
        css.replace(/\s/g, "") == cssAnswer.replace(/\s/g, "")) ||
      css.replace(/\s/g, "") == cssAnswer2.replace(/\s/g, "")
    ) {
      alert("congrats!");
    } else {
      alert("you probably have mistake in your code");
    }
  }
  return (
    <div>
      <h1 style={{ color: "bisque" }}>
        Создайте кнопку с текстом "Click me!" и задайте ей следующие стили:
        ширина - 50px, длина - 100px, цвет кнопки - зеленый, округление краев
        4px
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
    </div>
  );
}

export default Task2;

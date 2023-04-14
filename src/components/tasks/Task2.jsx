import React, { useContext } from "react";
import CodeBar from "../codebar/CodeBar";
import { editorContext } from "../../contexts/CompilerContext";
import { useNavigate } from "react-router-dom";
import TasksPage from "../../pages/TasksPage";

function Task2() {
  const { html, css, js } = useContext(editorContext);
  const navigation = useNavigate();

  let answer = "<button>Click me!</button>";
  let cssAnswer =
    "button{height:50px;width:100px;background-color:green;border-radius:4px;}";
  let cssAnswer2 =
    "button{height:50px;width:100px;background:green;border-radius:4px;}";
  let cssAnswer3 =
    "button{width:100px;height:50px;background:green;border-radius:4px;}";

  function checker() {
    if (
      (html.replace(/\s/g, "") == answer.replace(/\s/g, "") &&
        css.replace(/\s/g, "") == cssAnswer.replace(/\s/g, "")) ||
      css.replace(/\s/g, "") == cssAnswer2.replace(/\s/g, "") ||
      css.replace(/\s/g, "") == cssAnswer3.replace(/\s/g, "")
    ) {
      alert("congrats!");
    } else {
      alert("you probably have mistake in your code");
    }
  }
  return (
    <div style={{ background: "#b8e2e5" }}>
      <TasksPage />
      <div className="task">
        <h1 style={{ color: "black", marginBottom: 5 }}>Задание 2</h1>
        <p style={{ color: "black" }}>
          Создайте кнопку с текстом "Click me!" и задайте ей следующие стили:
          ширина - 50px, длина - 100px, цвет кнопки - зеленый, округление краев
          4px.
        </p>
      </div>

      <CodeBar />
      <div className="box">
        <button
          className="box-button"
          onClick={() => {
            navigation("/task1");
          }}
        >
          PREVIOUS
        </button>
        <button
          onClick={() => {
            console.log(html.replace(/\s/g, ""));
            checker();
          }}
          className="check"
        >
          CHECK
        </button>
        <button
          className="box-button"
          onClick={() => {
            navigation("/task3");
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Task2;

import React, { useContext } from "react";
import CodeBar from "../codebar/CodeBar";
import { editorContext } from "../../contexts/CompilerContext";
import { useNavigate } from "react-router-dom";
import TasksPage from "../../pages/TasksPage";

function Task3() {
  const { html, css, js } = useContext(editorContext);
  const navigation = useNavigate();
  let htmlAnswer =
    "<strong>text</strong><strong>text</strong><strong>text</strong>";
  let jsAnswer =
    "let strong=document.querySelectorAll(`strong`);strong.forEach((item) => {item.style.color=`green`})";

  function checker() {
    if (
      html.replace(/\s/g, "") == htmlAnswer.replace(/\s/g, "") &&
      js.replace(/\s/g, "") == jsAnswer.replace(/\s/g, "")
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
        <h1 style={{ color: "black", marginBottom: 5 }}>Задание 3</h1>
        <p style={{ color: "black" }}>
          Добавьте на страницу три тега strong с содержимым "text". Найдите все
          HTML-теги strong и окрасьте их в зеленый цвет.
        </p>
      </div>

      <CodeBar />
      <div className="box">
        <button
          className="box-button"
          onClick={() => {
            navigation("/task2");
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

export default Task3;

import React, { useContext } from "react";
import CodeBar from "../codebar/CodeBar";
import Preview from "../Preview/Preview";
import { editorContext } from "../../contexts/CompilerContext";
import "./task1.css";
import { useNavigate } from "react-router-dom";
import TasksPage from "../../pages/TasksPage";
import { runConfetti } from "../../utils/confetti";

function Task1() {
  const { html, css, js } = useContext(editorContext);
  const navigation = useNavigate();
  let answer =
    "<h1>Welcome to the club, buddy</h1><p>First rule of fight club is...</p>";

  function checker() {
    if (html.replace(/\s/g, "") == answer.replace(/\s/g, "")) {
      alert("congrats!");
      runConfetti();
    } else {
      alert("you probably have mistake in your code");
    }
  }
  return (
    <>
      <TasksPage />
      <div className="task" style={{ background: "#b8e2e5" }}>
        <h1 style={{  color: "black", marginBottom: 5 }}>
          Задание 1
        </h1>
        <p style={{ color: "black" }}>
          Выведите на экран заголовок первого уровня "Welcome to the club,
          buddy", а под ним параграф "First rule of fight club is..."
        </p>
      </div>
      <CodeBar />
      <div className="box">
        <h1 style={{ width: 200 }}></h1>
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
            navigation("/task2");
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Task1;

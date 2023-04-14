import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/TasksPage.css";

function TasksPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="list">
        <button className="number" onClick={() => navigate("/task1")}>
          1
        </button>
        <button className="number" onClick={() => navigate("/task2")}>
          2
        </button>
        <button className="number" onClick={() => navigate("/task3")}>
          3
        </button>
      </div>
    </>
  );
}

export default TasksPage;

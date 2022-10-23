import axios from "axios";
import { useState } from "react";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    postTask(newTask);

    setDate("");
    setTask("");
  };

  const postTask = async (newTask) => {
    const url = "https://63551891483f5d2df3ad04b0.mockapi.io/api/tasks";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-light">
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            TASK
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            aria-describedby="emailHelp"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            DATE
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn  btn-success">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddTask;

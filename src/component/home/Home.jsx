import { useState, useEffect } from "react";
import AddTask from "../addTask/AddTask";
import TaskList from "../taskList/TaskList";
import axios from "axios";

const Home = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = "https://63551891483f5d2df3ad04b0.mockapi.io/api/tasks";
  const toogle = () => {
    setShow(!show);
    const buttonText = show ? "Show Task Bar" : "Hide Text Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="home ">
      <button onClick={() => toogle()}>{text}</button>
      {show && <AddTask getTask={getTask} />}
      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;

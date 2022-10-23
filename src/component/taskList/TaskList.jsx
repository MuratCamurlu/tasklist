import axios from "axios";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63551891483f5d2df3ad04b0.mockapi.io/api/tasks";

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };
  return (
    <div>
      {task?.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className=" d-flex justify-content-between bg-secondary mt-2 rounded-2 p-2"
          >
            <div className="">
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <i
                onClick={() => deleteTask(id)}
                className="fa-solid fa-delete-left"
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

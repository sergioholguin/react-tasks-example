import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = {
      title: task.title,
      id: tasks.length,
      description: task.description,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskID) {
    let newArray = tasks.filter((task) => task.id !== taskID);
    setTasks(newArray);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  let values = {
    tasks,
    deleteTask,
    createTask,
  };

  return (
    <TaskContext.Provider value={values}>{props.children}</TaskContext.Provider>
  );
}

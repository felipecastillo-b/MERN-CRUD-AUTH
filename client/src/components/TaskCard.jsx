import { useTasks } from "../context/TasksContext";
import { Link } from 'react-router-dom';
import days from "dayjs";
import utc from "dayjs";
days.extend(utc);

/* eslint-disable react/prop-types */
function TaskCard({ task }) {

  const { deleteTask } = useTasks()

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <div className="flex gap-x-2 items-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => {
                deleteTask(task._id);
              }}>delete</button>
              <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" to={`/tasks/${task._id}`}>edit</Link>
          </div>
        </header>
        <p className="text-slate-300">{task.description}</p>
        <p>{days(task.date).utc().format("DD-MM-YYYY")}</p>
    </div>
  );
}

export default TaskCard;
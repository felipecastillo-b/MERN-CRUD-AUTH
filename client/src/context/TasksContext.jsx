import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";
import PropTypes from 'prop-types';

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("usetask error")
    }

    return context;
};

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log(res);
    }

    return (
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            getTasks,
        }} 
        >
            {children}
        </TaskContext.Provider>
    );
}

// Definir PropTypes para el componente TaskProvider
TaskProvider.propTypes = {
    children: PropTypes.node.isRequired // Valida 'children' como un nodo requerido
};
import Task from "../models/task.model.js";

export const getTasks = async (res, req) =>{
    const tasks = await Task.find()
    res.json(tasks)
};

export const createTask = async (res, req) =>{
    const { title, description, date } = req.body
    const newTask = new Task({
        title,
        description,
        date
    })
    const savedTask = await newTask.save();
    res.json(savedTask);

};

export const getTask = async (res, req) =>{
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json({ message: "Task not found" })
    res.json(task)
};

export const updateTask = async (res, req) =>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body)
    if (!task) return res.status(404).json({ message: "Task not found" })
    res.json(task)
};

export const deleteTask = async (res, req) =>{
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({ message: "Task not found" })
    res.json(task)
};
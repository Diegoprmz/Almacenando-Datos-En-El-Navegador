import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";

export const readTask = () => {
        const list = document.querySelector("[data-list]");
        console.log(list);

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    taskList.forEach((task) => {
        list.appendChild(dateElement(task.dateFormat))
        list.appendChild(createTask(task));
    });
}
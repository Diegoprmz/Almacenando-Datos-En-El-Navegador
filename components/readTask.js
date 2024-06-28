import { uniqueDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { addTask } from "./addTask.js";


export const readTask = () => {
        const list = document.querySelector("[data-list]");
        console.log(list);

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);

    dates.forEach( date  => {
        console.log(date);
    })

    taskList.forEach((task) => {
        list.appendChild(dateElement(task.dateFormat))
        list.appendChild(createTask(task));
    });
}
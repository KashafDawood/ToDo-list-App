import * as config from "./config.js";

let taskTitleInput = document.querySelector(".title--input");
let taskDescriptionInput = document.querySelector(".description--input");
let taskCatagoryInput = document.querySelector(".catagory--input");
let taskDueDateInput = document.querySelector(".dueDate--input");
let taskPriorityInput = document.querySelector(".priority--input");

const tasks = [
    ''
];

const task = {
    taskTitle: '',
    taskDescription : '',
    taskCatagory : '',
    taskDueDate : '',
    taskPriority : ''
}


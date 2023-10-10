import * as config from "./config.js";

let taskTitleInput = document.querySelector(".title--input");
let taskDescriptionInput = document.querySelector(".description--input");
let taskCatagory = document.querySelector(".catagory--input");
let taskDueDate = document.querySelector(".dueDate--input");
let taskPriority = document.querySelector(".priority--input");

const tasks = [
    ''
];

const getTaskEditorData = function(){
    console.log(taskTitleInput);
    console.log(taskDescriptionInput);
    console.log(taskCatagory);
    console.log(taskDueDate);
    console.log(taskPriority);
}


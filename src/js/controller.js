const closeTaskEditorBtn = document.querySelector(".closeIcon");
const TaskEditorContainer = document.querySelector(".taskCustomizerContainer");
const task = document.querySelectorAll(".tasks");
const addTaskContainer = document.querySelector(".addtaskContainer");
const addTaskBtn = document.querySelector(".addTaskBtn");

closeTaskEditorBtn.addEventListener("click", function(){
    TaskEditorContainer.style.display = "none";
});

task.forEach(t => t.addEventListener("click", function(){
    TaskEditorContainer.style.display = "block";
}));

addTaskBtn.addEventListener("click", function(){
    TaskEditorContainer.style.display = "block";
})
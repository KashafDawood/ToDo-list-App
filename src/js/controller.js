import taskEditorView from "./taskEditorView.js";
import taskContainerView from "./taskContainerView.js";
import * as model from "./model.js";
import * as config from "./config.js";

const controlFormData = function(){
    const formData = taskEditorView.getFormData();

    if(!formData) return;

    if(formData.taskTitle === '')return;
    
    console.log(formData);
    //push data to model.task array
    model.tasks.push(formData);
    console.log(model.tasks);
    //display the last added task
    const lastTaskIndex = model.tasks.length-1;
    console.log(lastTaskIndex);
    taskContainerView.renderTask(model.tasks[lastTaskIndex]);
}

// const controlTask = function(){
//     taskContainerView.renderTask(model.tasks);
// }

const init = function(){
    taskEditorView.closeTaskEditorHandler();
    // console.log(taskEditorView.priorityCheck());
    taskEditorView.addHandlerForm(controlFormData);
    taskContainerView.addTaskHandler();
    taskContainerView.renderTaskArray(model.tasks);
    // taskContainerView.addHandlerRender(controlTask);
    // taskContainerView.generateMarkupForTaskArray(model.tasks);
}
init();
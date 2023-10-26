import taskEditorView from "./taskEditorView.js";
import taskContainerView from "./taskContainerView.js";
import * as model from "./model.js";
import * as config from "./config.js";

const controlFormData = function(){
    const formData = taskEditorView.getFormData();

    if(!formData) return;

    if(!formData.taskTitle)return;
    
    //push data to model.task array
    model.tasks.push(formData);
    //display the last added task
    const lastTaskIndex = model.tasks.length-1;
    taskContainerView.renderTask(model.tasks[lastTaskIndex]);
}

const init = function(){
    taskEditorView.closeTaskEditorHandler();
    // console.log(taskEditorView.priorityCheck());
    taskEditorView.addHandlerForm(controlFormData);
    taskEditorView.addHandlerDeleteTask();
    taskContainerView.addTaskHandler();
    taskContainerView.renderTaskArray(model.tasks);
    taskContainerView.addHandlerTaskComplete();
    taskContainerView.addHandlerTaskEdit();
    taskContainerView.taskCounter();
    taskContainerView.clock();
}
init();
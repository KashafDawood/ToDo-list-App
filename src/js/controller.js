import taskEditorView from "./taskEditorView.js";
import taskContainerView from "./taskContainerView.js";
import * as model from "./model.js";
import * as config from "./config.js";

const controlFormData = function(){
    const formData = taskEditorView.getFormData();
    
    if(!formData) return;
    
    console.log(formData);
    //push data to model.task array
    model.tasks.push(formData);
    console.log(model.tasks);
}

const init = function(){
    taskEditorView.closeTaskEditorHandler();
    // console.log(taskEditorView.priorityCheck());
    taskEditorView.addHandlerForm(controlFormData);
    taskContainerView.addTaskHandler();
}
init();
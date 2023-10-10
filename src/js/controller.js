import taskEditorView from "./taskEditorView.js";
import taskContainerView from "./taskContainerView.js";
import * as config from "./config.js";


const init = function(){
    taskEditorView.closeTaskEditorHandler();
    taskEditorView.priorityCheck();
    taskContainerView.addTaskHandler();
}
init();
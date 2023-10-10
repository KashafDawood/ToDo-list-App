import * as config from "./config.js";

class TaskContainerView{
    #parentEL = document.querySelector(".todoist");
    #data;

    addTaskHandler(){
        config.addTaskBtn.addEventListener("click", function(){
            config.TaskEditorContainer.style.display = "block";
        })
    }
}

export default new TaskContainerView();
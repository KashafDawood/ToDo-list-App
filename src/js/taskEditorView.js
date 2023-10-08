import * as config from "./config.js";

class TaskEditorView{
    #parentEL = document.querySelector(".taskCustomizerContainer");
    #data;

    closeTaskEditorHandler(){
        config.closeTaskEditorBtn.addEventListener("click", function(){
            config.TaskEditorContainer.style.display = "none";
        })
    }
}

export default new TaskEditorView();
import taskEditorView from "./taskEditorView.js";
import * as config from "./config.js";


// closeTaskEditorBtn.addEventListener("click", function(){
//     TaskEditorContainer.style.display = "none";
// });

// task.forEach(t => t.addEventListener("click", function(){
//     TaskEditorContainer.style.display = "block";
// }));

// addTaskBtn.addEventListener("click", function(){
//     TaskEditorContainer.style.display = "block";
// })

const init = function(){
    taskEditorView.closeTaskEditorHandler();
}
init();
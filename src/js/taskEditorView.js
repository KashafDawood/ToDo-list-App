import * as config from "./config.js";

class TaskEditorView{
    #parentEL = document.querySelector(".taskCustomizerContainer");
    #data;

    closeTaskEditorHandler(){
        config.closeTaskEditorBtn.addEventListener("click", function(){
            config.TaskEditorContainer.style.display = "none";
        })
    }

    priorityCheck(){
        config.priorityBtnContainer.addEventListener('click', function(e){
            e.preventDefault();

            const clickedBtn = e.target.closest('.priority--input');

            //guard clause
            if(!clickedBtn) return;

            //remove the active class from all btn
            config.priorityBtns.forEach(el => el.classList.remove('priorityBtnActive'));
            //add active class to clicked class
            clickedBtn.classList.add('priorityBtnActive');
            console.log(clickedBtn.value);
            //getting the value of the btn which have active class
            return clickedBtn.value;
        });
    }
}

export default new TaskEditorView();
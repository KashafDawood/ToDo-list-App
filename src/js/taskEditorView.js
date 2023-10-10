import * as config from "./config.js";


// export let taskTitleInput = document.querySelector(".title--input").value;
// export let taskDescriptionInput = document.querySelector(".description--input").value;
// export let taskCatagoryInput = document.querySelector(".catagory--input").value;
// export let taskDueDateInput = document.querySelector(".dueDate--input").value;
// export let taskPriorityInput = document.querySelector(".priority--input");


class TaskEditorView{
    #parentEL = document.querySelector(".taskCustomizerContainer");
    #data;

    closeTaskEditorHandler(){
        config.closeTaskEditorBtn.addEventListener("click", function(){
            config.TaskEditorContainer.style.display = "none";
        })
    }


    #clearForm(){
        this.#parentEL.querySelector('.title--input').value = '';
        this.#parentEL.querySelector('.description--input').value = '';
        this.#parentEL.querySelector('.catagory--input').value = '';
        this.#parentEL.querySelector('.dueDate--input').value = '';
        config.priorityBtns.forEach(el => el.classList.remove('priorityBtnActive'));
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

    getFormData(){
        const task = {
            taskTitle: this.#parentEL.querySelector('.title--input').value,
            taskDescription : this.#parentEL.querySelector('.description--input').value,
            taskCatagory : this.#parentEL.querySelector('.catagory--input').value,
            taskDueDate : this.#parentEL.querySelector('.dueDate--input').value,
            taskPriority : this.priorityCheck()
        }
        //clear form
        this.#clearForm();
        return task;
    }

    addHandlerForm(handler){
        config.saveTaskBtn.addEventListener("click", function(e){
            e.preventDefault();
            //handle data to controller
            handler();
        });
    }
}

export default new TaskEditorView();
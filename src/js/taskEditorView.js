import * as config from "./config.js";

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
        // this.#parentEL.querySelector('.description--input').value = '';
        this.#parentEL.querySelector('.catagory--input').value = '';
        this.#parentEL.querySelector('.dueDate--input').value = '';
        this.#parentEL.querySelector('.priority--input').value = '';
    }

    // priorityCheck(){
    //     config.priorityBtnContainer.addEventListener('click', function(e){
    //         e.preventDefault();

    //         const clickedBtn = e.target.closest('.priority--input');

    //         //guard clause
    //         if(!clickedBtn) return;

    //         //remove the active class from all btn
    //         config.priorityBtns.forEach(el => el.classList.remove('priorityBtnActive'));
    //         //add active class to clicked class
    //         clickedBtn.classList.add('priorityBtnActive');
    //         const btnValue = clickedBtn.value;
    //         // console.log(btnValue);
    //         //getting the value of the btn which have active class
    //         return btnValue;
    //     });
    // }

    getFormData(){

        const title = this.#parentEL.querySelector('.title--input').value;
        // const description = this.#parentEL.querySelector('.description--input').value;
        const catagory = this.#parentEL.querySelector('.catagory--input').value;
        const dueDate = this.#parentEL.querySelector('.dueDate--input').value;
        const priority = this.#parentEL.querySelector('.priority--input').value;

        const task = {
            taskTitle: title,
            // taskDescription : description,
            taskCatagory : catagory,
            taskDueDate : dueDate,
            taskPriority : priority,
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
            config.TaskEditorContainer.style.display = "none";
        });
    }

    addHandlerDeleteTask(){
        const deleteBtn = this.#parentEL.querySelector('.delete--task');
        deleteBtn.addEventListener("click", function(e){
            e.preventDefault();
            config.TaskEditorContainer.style.display = "none";
            document.querySelector('.title--input').value = '';
            // document.querySelector('.description--input').value = '';
            document.querySelector('.catagory--input').value = '';
            document.querySelector('.dueDate--input').value = '';
            document.querySelector('.priority--input').value = '';
        });
    }


}

export default new TaskEditorView();
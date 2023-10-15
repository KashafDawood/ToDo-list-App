import * as config from "./config.js";

class TaskContainerView {
    #parentEL = document.querySelector(".todoist");
    #data;

    addTaskHandler() {
        config.addTaskBtn.addEventListener("click", function () {
            config.TaskEditorContainer.style.display = "block";
        })
    }

    renderTask(data) {
        //add generate markup with this data
        const markup = this.generateTaskMarkup(data);
        //insert the markup in html
        config.taskContainer.insertAdjacentHTML('afterbegin', markup);
        this.addHandlerTaskComplete();
        this.addHandlerTaskEdit(data);
    }

    renderTaskArray(data) {
        //task info
        this.#data = data;
        return data.map(el => this.renderTask(el)).join('');
    }

    generateTaskMarkup(data) {
        return `
            <div class="tasks">
                <div class="taskTitle">
                    <h5 class="title">${data.taskTitle}</h5>
                    <i class='bx bx-chevron-right'></i>
                </div>

                <div class="taskSpecs">
                    <div class="taskDueDate"><i class='bx bx-calendar-x'></i>${data.taskDueDate}</div>
                    <div class="taskCatagory"><i class='bx bxs-user-circle'></i>${data.taskCatagory}</div>
                    <div class="taskPriority"><i class='bx bxs-flag-alt'></i>${data.taskPriority}</div>
                    <button class="taskEdit"><i class='bx bxs-pencil'></i></button>
                    <button class="taskCheck"><span>&#10003;</span></button>
                </div>
            </div>
        `
    }

    addHandlerTaskComplete(){
        const taskCompleteBtn = document.querySelector(".taskCheck");
        const task = document.querySelectorAll('.tasks');
        
        if(!taskCompleteBtn) return;
        
        taskCompleteBtn.addEventListener("click", function(e){
            console.log(task)

            e.preventDefault();
            const target = e.target;
            console.log(target)
            //change styling of task
            // const taskDoneBtn = target.closest('.taskCheck');
            // taskDoneBtn.classList.toggle('checked');
            taskCompleteBtn.classList.toggle('checked');
            const grandparent = target.closest('.tasks');
            grandparent.classList.toggle('taskcomplete');
            const title = target.closest('.tasks').querySelector('.title');
            title.classList.toggle('titleLine');
        });
    }

    addHandlerTaskEdit(data){
        const taskEditBtn = this.#parentEL.querySelector('.taskEdit');
        const task = this.#parentEL.querySelector('.tasks');

        const matchData = function(){
            data.map(el => {
                if(el.taskTitle === title && el.taskCatagory === catagory && el.taskDueDate === dueDate && el.taskPriority === priority){
                    return el;
                }
            })
        }

        taskEditBtn.addEventListener('click', function(e){
            e.preventDefault();

            const target = e.target;

            config.TaskEditorContainer.style.display = "block";
            console.log(taskEditBtn);

            const Tasktitle = target.closest('.tasks').querySelector('.title').innerText;
            const TaskDueDate = target.closest('.tasks').querySelector('.taskDueDate').innerText;
            const TaskCatagory = target.closest('.tasks').querySelector('.taskCatagory').innerText;
            const TaskPriority = target.closest('.tasks').querySelector('.taskPriority').innerText;

            let title = document.querySelector('.title--input').value = Tasktitle;
            let description = document.querySelector('.description--input').value;
            let catagory = document.querySelector('.catagory--input').value = TaskCatagory;
            let dueDate = document.querySelector('.dueDate--input').value = TaskDueDate;
            let priority = document.querySelector('.priority--input').value = TaskPriority;
            
            const removeIndex = data.findIndex(matchData);
            data.splice(removeIndex, 1);
            task.remove();

        });
    }


}


export default new TaskContainerView();
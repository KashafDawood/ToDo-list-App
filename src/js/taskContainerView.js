import * as config from "./config.js";
import { tasks } from "./model.js";
import { deleteIndex } from "./model.js";

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
        this.addHandlerTaskEdit();
        this.taskCounter();
    }

    renderTaskArray(data) {
        //task info
        this.#data = data;
        const renderData = data.map(el => this.renderTask(el)).join('');
        return renderData;
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

    addHandlerTaskEdit(){
        const taskEditBtn = this.#parentEL.querySelectorAll('.taskEdit');
        const task = this.#parentEL.querySelector('.tasks');

        taskEditBtn.forEach((el, i) => el.addEventListener('click', function(e){
            e.preventDefault();

            const target = e.target;
            const index = taskEditBtn.length - 1 - i;

            config.TaskEditorContainer.style.display = "block";
            console.log(taskEditBtn);

            const Tasktitle = target.closest('.tasks').querySelector('.title').innerText;
            const TaskDueDate = target.closest('.tasks').querySelector('.taskDueDate').innerText;
            const TaskCatagory = target.closest('.tasks').querySelector('.taskCatagory').innerText;
            const TaskPriority = target.closest('.tasks').querySelector('.taskPriority').innerText;

            let title = document.querySelector('.title--input').value = Tasktitle;
            // let description = document.querySelector('.description--input').value = data[index].taskDescription;
            let catagory = document.querySelector('.catagory--input').value = TaskCatagory;
            let dueDate = document.querySelector('.dueDate--input').value = TaskDueDate;
            let priority = document.querySelector('.priority--input').value = TaskPriority;

            deleteIndex(index);

            el.closest('.tasks').remove();
            const tasks = document.querySelectorAll('.tasks');
            const taskCount = document.querySelector('.noOfTasks');
            taskCount.innerText = tasks.length;

        }));
    }

    taskCounter(){
        const taskCount = this.#parentEL.querySelector('.noOfTasks');
        const tasks = this.#parentEL.querySelectorAll('.tasks');
        taskCount.innerText = tasks.length;
    }

}


export default new TaskContainerView();
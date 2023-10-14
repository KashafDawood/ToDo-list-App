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
                    <button class="taskCheck"><span>&#10003;</span></button>
                </div>
            </div>
        `
    }

    addHandlerTaskComplete(){
        const tasks = document.querySelector(".taskContainer");

        tasks.addEventListener("click", function(e){
            e.preventDefault();
            const target = e.target;
            //change styling of task
            const btn = target.closest('.taskCheck');
            if(e.target === btn){
                btn.classList.toggle('checked');
                if(!btn) return;
                const grandparent = target.closest('.tasks');
                grandparent.classList.toggle('taskcomplete');
                const title = target.closest('.tasks').querySelector('.title');
                title.classList.toggle('titleLine');
            }else{
                config.TaskEditorContainer.style.display = "block";

                const Tasktitle = target.closest('.tasks').querySelector('.title').innerText;
                const TaskDueDate = target.closest('.tasks').querySelector('.taskDueDate').innerText;
                const TaskCatagory = target.closest('.tasks').querySelector('.taskCatagory').innerText;
                const TaskPriority = target.closest('.tasks').querySelector('.taskPriority').innerText;

                console.log(TaskCatagory);
                console.log(TaskPriority);

                let title = document.querySelector('.title--input').value = Tasktitle;
                let description = document.querySelector('.description--input').value;
                let catagory = document.querySelector('.catagory--input').value = TaskCatagory;
                let dueDate = document.querySelector('.dueDate--input').value = TaskDueDate;
                let priority = document.querySelector('.priority--input').value = TaskPriority;
            }
        });
    }


}


export default new TaskContainerView();
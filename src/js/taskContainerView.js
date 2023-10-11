import * as config from "./config.js";

class TaskContainerView{
    #parentEL = document.querySelector(".todoist");
    #data;

    addTaskHandler(){
        config.addTaskBtn.addEventListener("click", function(){
            config.TaskEditorContainer.style.display = "block";
        })
    }

    addHandlerPreview(handler){
        config.saveTaskBtn.addEventListener("click", function(e){
            e.preventDefault();
            //handle data to controller
            handler();
        });
    }

    generateMarkupForTaskArray(data){
        this.#data = data;
        const test = data.map(el => this.renderTask(el)).join('');
        console.log(test);
    }

    renderTask(data){
        //task info
        this.#data = data;
        //add generate markup with this data
        const markup = this.generateTaskMarkup();
        //insert the markup in html
        config.taskContainer.insertAdjacentHTML('afterbegin', markup);
    }

    generateTaskMarkup(){
        return `
            <div class="tasks">
                <div class="taskTitle">
                    <h5>${this.#data.taskTitle}</h5>
                    <i class='bx bx-chevron-right'></i>
                </div>

                <div class="taskSpecs">
                    <div class="taskDueDate"><i class='bx bx-calendar-x'></i>${this.#data.taskDueDate}</div>
                    <div class="taskCatagory"><i class='bx bxs-user-circle'></i>${this.#data.taskCatagory}</div>
                    <div class="taskPriority"><i class='bx bxs-flag-alt'></i>${this.#data.taskPriority}</div>
                </div>
            </div>
        `
    }
}

export default new TaskContainerView();
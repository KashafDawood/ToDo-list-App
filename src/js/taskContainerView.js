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
                    <h5>${data.taskTitle}</h5>
                    <i class='bx bx-chevron-right'></i>
                </div>

                <div class="taskSpecs">
                    <div class="taskDueDate"><i class='bx bx-calendar-x'></i>${data.taskDueDate}</div>
                    <div class="taskCatagory"><i class='bx bxs-user-circle'></i>${data.taskCatagory}</div>
                    <div class="taskPriority"><i class='bx bxs-flag-alt'></i>${data.taskPriority}</div>
                </div>
            </div>
        `
    }

}


export default new TaskContainerView();
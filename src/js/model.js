import * as config from "./config.js";

export const deleteIndex = function(index){
    if(index >= 0 && index < tasks.length){
        tasks.splice(index, 1);
    }
}

export const tasks = [
    // {
    //     taskTitle: 'CS301 Quiz',
    //     // taskDescription : 'chapter 5 quiz',
    //     taskCatagory : 'Study',
    //     taskDueDate : '2023-10-04',
    //     taskPriority : 'Priority 1',
    // },
    // {
    //     taskTitle: 'CS201 Quiz',
    //     // taskDescription : 'chapter 2 quiz',
    //     taskCatagory : 'Study',
    //     taskDueDate : '2023-10-05',
    //     taskPriority : 'Priority 3',
    // },
    // {
    //     taskTitle: 'CS304 Quiz',
    //     // taskDescription : 'chapter 8 quiz',
    //     taskCatagory : 'Study',
    //     taskDueDate : '2023-10-20',
    //     taskPriority : 'Priority 2',
    // },
    // {
    //     taskTitle: 'CS401 Quiz',
    //     // taskDescription : 'chapter 7 quiz',
    //     taskCatagory : 'Study',
    //     taskDueDate : '2023-10-15',
    //     taskPriority : 'Priority 1',
    // }
];

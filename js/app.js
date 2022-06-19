"use strict"
let taskName;
const tasksContainer = document.getElementById("tasks");
const submitBtn = document.getElementById("submit-btn");


class TaskElement {
    constructor() {
        this.create = function () {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            tasksContainer.appendChild(taskDiv);

            //Done button
            const doneBtn = document.createElement("button");
            doneBtn.classList.add("done-btn");
            doneBtn.innerHTML = "Done"
            taskDiv.appendChild(doneBtn);
            doneBtn.onclick = function () {
                tasksContainer.removeChild(taskDiv);
            }

            //Input
            const taskInput = document.createElement("input");
            taskInput.setAttribute("type", "text");
            taskInput.setAttribute("value", `${taskName}`);
            taskInput.setAttribute("readonly", "");
            taskInput.classList.add("task-input");
            taskDiv.appendChild(taskInput);

            //Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.innerHTML = "Delete"
            taskDiv.appendChild(deleteBtn);
            deleteBtn.onclick = function () {
                tasksContainer.removeChild(taskDiv);
            }


            //Edit button
            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.innerHTML = "Edit"
            taskDiv.appendChild(editBtn);
            editBtn.onclick = function () {
                //Edit mode
                taskInput.removeAttribute("readonly");
            }


        }
    }
}


submitBtn.onclick = function () {
    taskName = document.getElementById("task-name-input").value;
    const task = new TaskElement();
    task.create();
    return false;
}
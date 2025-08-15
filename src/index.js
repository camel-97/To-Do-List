// To Do list App
import "./index.css";
import "./project-form.css";
import "./project-card.css"
import { projectManager } from "./project.js";

//wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {
    //create project card upon form submition
    const newProdBtn = document.getElementById("new");
    newProdBtn.addEventListener("click", () => {
        const form = document.getElementById("form-container");
        form.classList.remove("hidden-form");
        console.log("js-linked successfully")
    });

    const submitForm = document.getElementById("new-project-form");
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //get form values
        const tit = document.getElementById("title-input").value;
        const desc = document.getElementById("description-input").value;
        const due = document.getElementById("due-date-input").value;
        const pri = document.querySelector(`input[name="priority"]:checked`)?.value;

        //call creation import
        const {project} = projectManager.createProject(tit, desc, due, pri);
        
        //clear and hide form
        const form = document.getElementById("form-container");
        form.classList.add("hidden-form");
        
        //validate
        console.log(projectManager.projectArray);

        //clone template once for added project
        const main = document.querySelector("main");
        const template = document.getElementById("project-card-template");
            
        const clone = template.content.cloneNode(true);
            
        clone.querySelector(".card-title").textContent = project.title;
        clone.querySelector(".project-description").textContent = project.description;
        clone.querySelector(".due-date-footer").textContent = project.dueDate;
            
        const priority = clone.querySelector("#priority-id");
        priority.classList.remove("high", "low", "immediate");
        priority.classList.add(project.priority);
            
        main.appendChild(clone);
        document.getElementById("new-project-form").reset();
        })
});




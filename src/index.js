// To Do list App
import "./index.css";
import "./project-form.css";
import "./project-card.css"
import { projectManager } from "./project.js";

window.addEventListener("DOMContentLoaded", () => {
    const newProdBtn = document.getElementById("new");
    newProdBtn.addEventListener("click", () => {
        const form = document.getElementById("form-container");
        form.classList.remove("hidden-form");
        console.log("js-linked successfully")
    });

    const submitBtn = document.getElementById("new-project-form");
    submitBtn.addEventListener("submit", (e) => {
        e.preventDefault();

        const tit = document.getElementById("title-input").value;
        const desc = document.getElementById("description-input").value;
        const due = document.getElementById("due-date-input").value;
        const pri = document.querySelector(`input[name="priority"]:checked`)?.value;

        projectManager.createProject(tit, desc, due, pri);
        const form = document.getElementById("form-container");
        form.classList.add("hidden-form");
        console.log(projectManager.projectArray);
    })
});




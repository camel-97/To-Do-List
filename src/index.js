// To Do list App
import "./index.css";
import "./project-form.css";
import "./project-card.css"
import { projectManager } from "./project.js";
import { renderProjectCard, appendToMain } from "./render-project-card.js"
import { clearForm, closeForm, bindForm, openForm } from "./project-form.js";


//wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {
    
    const newProdBtn = document.getElementById("new");
    newProdBtn.addEventListener("click", openForm);

    bindForm(({title, description, dueDate, priority}) => {
        const { project } = projectManager.createProject(title, description, dueDate, priority);
        const card = renderProjectCard(project);
        appendToMain(card);
        clearForm();
        closeForm();
    })



});


    
    


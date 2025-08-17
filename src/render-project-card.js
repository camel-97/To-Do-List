  import { projectManager } from "./project";

export function renderProjectCard(project) {     
        const template = document.getElementById("project-card-template");
        const clone = template.content.cloneNode(true);

        const card = clone.querySelector(".project-card");
        card.dataset.projectId = project.id; 
            
        card.querySelector(".card-title").textContent = project.title;
        card.querySelector(".project-description").textContent = project.description;
        card.querySelector(".due-date-footer").innerHTML = `Project Due Date: <strong>${project.dueDate}<strong>`;
            
        const dot = card.querySelector(".priority-icon");
        dot.classList.remove("high", "low", "immediate");
        dot.classList.add(project.priority);

        const deleteProjectBtn = card.querySelector(".delete-project");
        deleteProjectBtn.addEventListener("click", () =>{
        const confirmDelete = confirm("Are you sure you want to permenantly delete this project?");
            if (confirmDelete){
            projectManager.removeProject(project.id);
            card.remove();
            console.log(projectManager.projectArray);
            }
            else { return };
    });
        return card;
}

export function appendToMain(card) {
    const main = document.querySelector("main");
    main.appendChild(card);
};
  
export function renderProjectCard(project) {     
        const template = document.getElementById("project-card-template");
        const clone = template.content.cloneNode(true);
            
        clone.querySelector(".card-title").textContent = project.title;
        clone.querySelector(".project-description").textContent = project.description;
        clone.querySelector(".due-date-footer").textContent = project.dueDate;
            
        const priority = clone.querySelector("#priority-id");
        priority.classList.remove("high", "low", "immediate");
        priority.classList.add(project.priority);

        return clone;
}

export function appendToMain(clone) {
    const main = document.querySelector("main");
    main.appendChild(clone);
};
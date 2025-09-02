  import { projectManager } from "./project";
  import { renderSidebar } from "./sidebar";

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
            renderSidebar();
            }
            else { return };
        });
        const clearBtn= card.querySelector(".clear-completed");
        clearBtn.addEventListener("click", () => {
          const projectId = card.dataset.projectId;
          const proj = projectManager.getProjectById(projectId);
          const completedIds = proj.toDos.filter(t => t.completed).map(t => t.id);
          completedIds.forEach(id => {
              proj.removeTodo();
              const table = card.querySelector(".todos-table");
              const row = table.querySelector('[data-todo-id="'+ id +'"]');
              if (row) {
                row.remove();
              }

            })
        })
    return card;
  }
    

        


export function appendToMain(card) {
    const main = document.querySelector("main");
    main.appendChild(card);
}
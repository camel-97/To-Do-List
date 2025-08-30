import { projectManager } from "./project.js"

export function wireTodoCard(card) {
    if (!card || card.dataset.todoWired) return;
    const addBtn = card.querySelector(".add-task");
    const formCont = card.querySelector(".todo-form-container");
    const exitBtn = card.querySelector(".close-form");
    const todoForm = card.querySelector(".new-todo-form")

    if (!addBtn || !formCont) return;

    addBtn.type = "button";
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formCont.classList.remove("hide-todo-form");
    });
    exitBtn.addEventListener("click", () => {
        todoForm.reset();
        formCont.classList.add("hide-todo-form")
    });

    card.querySelector(".todos-table").addEventListener("click", (e) =>{
            const toggleBtn = e.target.closest(".completed");
            if (!toggleBtn) return;

            const row = toggleBtn.closest("[data-todo-id]");
            if (!row) return;

            const todoId = row.dataset.todoId;
            const projectId = card.dataset.projectId;

            const project = projectManager.getProjectById(projectId);
            project.toggleComplete(todoId);

            const toDo = project.toDos.find(t => t.id === todoId);
            if (toDo.completed){
                toggleBtn.textContent = "o"
                toggleBtn.classList.remove("completed-false");
                toggleBtn.classList.add("completed-true");
            }
            else {
                toggleBtn.textContent = "x"
                toggleBtn.classList.remove("completed-true");
                toggleBtn.classList.add("completed-false");
            }
        })

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const title = data.get('todo-title');
        const dueDate = data.get("todo-due-date-input");
        const priority = data.get("priority");

        const projectId = card.dataset.projectId;
        const createdTodo = projectManager.addToDo(projectId, title, dueDate, priority);
        
        const template = card.querySelector(".todo-data-row");
        const clone = template.content.cloneNode(true);
        const cardTable = card.querySelector(".todos-table")

        clone.querySelector(".task-cell").textContent = createdTodo.title;
        clone.querySelector(".due-cell").textContent = createdTodo.dueDate;
        clone.querySelector(".priority-cell").classList.add(createdTodo.priority);
        clone.querySelector(".completed").textContent = "x";
        clone.querySelector(".completed").classList.add("completed-false");
        clone.querySelector(".temp-row").dataset.todoId = createdTodo.id;

        cardTable.appendChild(clone);
        todoForm.reset();
        formCont.classList.add("hide-todo-form");
    })
}


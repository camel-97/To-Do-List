import { projectManager } from "./project";

export function openForm() {
    const formCon = document.getElementById("form-container");
    formCon.classList.remove("hidden-form");
}

export function closeForm() {
    const formCon = document.getElementById("form-container");
    formCon.classList.add("hidden-form");
}

export function clearForm() {
    document.getElementById("new-project-form").reset();
}

export function deleteProject() {
    const projectCard = document.querySelector(".project-card");
    projectCard.remove()
    projectManager.removeProject(project.id) ;
    console.log(projectManager.projectArray);
}

export function bindForm(onSubmit) {
    const submitForm = document.getElementById("new-project-form");
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(submitForm);
        onSubmit({
        title: data.get("title-input"),
        description: data.get("description-input"),
        dueDate: data.get("due-date-input"),
        priority: data.get("priority") || "low",
        });
    });
}
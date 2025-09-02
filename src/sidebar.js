import { projectManager } from "./project.js";

export function renderSidebar() {
const sidebarList = document.querySelector("#project-list");
sidebarList.textContent = "";
projectManager.projectArray.forEach(project => {
    const proj = project.title;
    const sidebarEntry = document.createElement("div");
    sidebarEntry.textContent = proj;
    sidebarList.appendChild(sidebarEntry);
    });
};
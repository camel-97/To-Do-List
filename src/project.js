//Project.js handles:
//Project Creation
//Todo Creation for projects
//Methods for Prjects, and for Todos
// All under the IFFE of projectManager

export const projectManager = (() => {

    const projectArray = [];

    class Todo {
        constructor(title, dueDate, priority) {
            this.title = title;
            this.dueDate = dueDate;
            this.priority = priority;
            this.completed = false;
            this.id = crypto.randomUUID();
        }
    }
    class Project {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.completed = false;
            this.id = crypto.randomUUID();
            this.toDos = [];

        };

        addToDo(title, dueDate, priority) {
            const newToDo = new Todo(title, dueDate, priority);
            this.toDos.push(newToDo);
            return newToDo;
            }

        removeToDo(id) { 
            const idx = this.toDos.findIndex(todo => todo.id === id);
            if (idx !== -1) this.toDos.splice(idx, 1);
            }    
        
        toggleComplete(id) {
            const todo = this.toDos.find(t => t.id === id);
            if (todo) todo.completed = !todo.completed;
        }

        clearCompleted() {
            this.toDos = this.toDos.filter(todo => !todo.completed);
        }
    }

    const createProject = (title, description, dueDate, priority) => {
        const project = new Project(title, description, dueDate, priority);
        projectArray.push(project);
        return {
            project,
            projectArray }  
    } 
    
    const removeProject = (id) => {
        const proidx = projectArray.findIndex(proj => proj.id === id);
        if (proidx !== -1) {
            projectArray.splice(proidx, 1);
        }
    }

    const getProjectById = (id) => projectArray.find(p => p.id === id);

    const addToDo = (projectId, title, dueDate, priority) => {
        const project = getProjectById(projectId);
        if (!project) return null;
        return project.addToDo(title, dueDate, priority);
    }

    return {
        projectArray,
        createProject,
        removeProject,
        addToDo,
        getProjectById
    }
})();




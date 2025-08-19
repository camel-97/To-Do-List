export function wireTodoCard(card) {
    if (!card || card.dataset.todoWired) return;
    const addBtn = card.querySelector(".add-task");
    const formCont = card.querySelector(".todo-form-container");
    const exitBtn = card.querySelector(".close-form");
    const totoForm = card.querySelector(".new-todo-form")

    if (!addBtn || !formCont) return;

    addBtn.type = "button";
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formCont.classList.remove("hide-todo-form");
    });
    card.dataset.todoWired = "1";

    exitBtn.addEventListener("click", () => {
        totoForm.reset();
        formCont.classList.add("hide-todo-form")
    })


};


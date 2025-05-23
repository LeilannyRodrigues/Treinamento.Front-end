const content = document.querySelector("#content");

const showButton = document.querySelector("#show");

const hideButton = document.querySelector("#hide");

const hideShowButton = document.querySelector("#hideShowContent");

showButton.addEventListener("click", () => {
    content.classList.add("show");
    content.classList.remove("hide")
})

hideButton.addEventListener("click", () => {
    content.classList.add("hide");
    content.classList.remove("show");
})

hideShowButton.addEventListener("click", () => {
    content.classList.toggle("hide")
})

//("dblclick") -> Só funciona quando clica 2 vezes
//("mousedown") -> clicar e pressionar
//("mousemove") -> basta passar o mouse por cima para ter o evento
//("mouseenter") -> passar mouse por cima (quando entra na área do objeto)
//("mouseleave") -> passar mouse por cima (funciona quando sai da área do objeto)

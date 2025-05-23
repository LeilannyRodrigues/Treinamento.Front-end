// seleção por Id

const content = document.getElementById("content")

console.log("content",content)

content.innerHTML = `<p>Parágrafo de texto</p>`
content.style.backgroundColor="#F00"
content.style.fontSize="30px"

// Seleção por classe

const classText = document.getElementsByClassName("text")

console.log("classText",classText)

for(text of classText)
    text.style.color = "#00F"

// Seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles",titles)

for(title of titles){
    title.style.fontSize = "40px"
}

// query selector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent = `Um novo parágrafo`

elementFeature.append(newElement)

// Outra forma:

elementFeature.insertAdjacentHTML("beforeend",`
    <div>
    <p>Outro parágrafo criado dinamicamente</p>
    </div>`)

// Outro método:

document.body.insertBefore(newElement, elementFeature)

// query selectorAll

const links = document.querySelectorAll("#links a")

console.log("links",links)

for(link of links){
    link.classList.add("feature-links")
    console.log(link.getAttribute("href"))
    link.target = "_blank"
    link.title = link.getAttribute("href").slice(0, -5)
}

//remove

content.remove()

// navegação pelo DOM

const lista = document.querySelector("#links ul")

lista.parentNode.style.backgroundColor = "#F00"

lista.children

console.log("filho",lista.children)

// alteração:

for (list of lista.children){
    list.style.fontSize="50px"
}

lista.firstElementChild.style.fontSize="20px"

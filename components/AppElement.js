
const templatePersonas = document.createElement("template"); 
templatePersonas.innerHTML = `
<div id="prueba">HOLA <slot name="titulo">Prueba</slot> </div>
`; 

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
}


const ul = document.createElement("ul");
const personas = [
    new Persona("Juan", 20),
    new Persona("Juan", 20),
    new Persona("Juan", 20)
]
class AppElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    render(persona) {
        const li = document.createElement("li");
        li.textContent = `${persona.getNombre()}, ${persona.getEdad()}`;
        ul.appendChild(li);
        this.shadowRoot.append(ul);
    }
    renderList() {        
        personas.forEach(element => {
            const li = document.createElement("li");
            li.textContent = `${element.getNombre()}, ${element.getEdad()}`;
            ul.appendChild(li);
        });       
        this.shadowRoot.append(ul);
    }

}

//customElements.define("app-element", AppElement);

const lista = document.querySelector("app-element");

//lista.renderList(personas);
//document.body.ap


class ImputElement extends HTMLElement {

    constructor() {
        super();
    }

    render() {
        this.attachShadow({ mode: "open" });
        const input = document.createElement("input");
        input.type = "text";
        input.title = "S";
        const edadLebel = document.createElement("label");
        edadLebel.textContent = "edad";

        const inputEdad = document.createElement("input");
        inputEdad.type = "number";
        inputEdad.id = "numero";
        inputEdad.title = "sd";
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = "Agregar";
        btn.addEventListener("click", function () {

            lista.render(new Persona(input.value, inputEdad.value));
        });

        const div = document.createElement("div");
        div.appendChild(input);
        div.appendChild(edadLebel);
        div.appendChild(inputEdad);
        div.appendChild(btn);

        this.shadowRoot.append(div);
    }
}

class Prueba extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        //const data = document.cloneNode(templatePersonas); 
        this.shadowRoot.appendChild(templatePersonas.content.cloneNode(true));
    }
}

customElements.define("app-prueba", Prueba);
//customElements.define("app-input", ImputElement);

const from = document.querySelector("app-input");

//from.render();
var imgs = document.querySelectorAll(".img-td");
for (const img of imgs) {
    img.addEventListener('mouseover', () => {
        let imageC = document.createElement("img");
        let divimg = document.createElement("div");
        divimg.className = "PRUEBA"
        imageC.src = img.src;
        imageC.style.border = "5px solid black";
        imageC.style.width = "100%";
        imageC.style.height = "100%";
        imageC.style.display = "float";
        imageC.style.position = "relative";
        divimg.appendChild(imageC)
        img.parentElement.appendChild(divimg);

        img.addEventListener('mouseout', () => {
            img.parentElement.removeChild(divimg);
        });
    });
}

var rows = document.querySelectorAll("tr");
var titles = document.querySelectorAll("tr td:nth-child(3)");
var artist = document.querySelectorAll("tr td:nth-child(4)");
var years = document.querySelectorAll("tr td:nth-child(5)");
var gens = document.querySelectorAll("tr td:nth-child(6)");

const selectElement = document.getElementById('genero');
selectElement.addEventListener('change', (event) => {
    rows[0].style.display = "inline-block";
    var gens = document.querySelectorAll("tr td:nth-child(6)");
    const sel = selectElement.options[event.target.value].text;
    
    if (event.target.value == 0) {
        for (let i = 0; i < gens.length; i++) {
            rows[i+1].style.display = 'unset';
        }
    }
    else {
        for (let i = 0; i < gens.length; i++) {
            if (gens[i].textContent != sel) {
                rows[i + 1].style.display = 'none';
            }
            else {
                rows[i + 1].style.display = 'unset';
            }
        }
    }
});

let modal = document.createElement("div");
modal.id = "myModal";
modal.className = "modal";
let modalC = document.createElement("div");
modalC.className = "modal-content";
let modalContent = document.createElement("span");
modalContent.className = "close";
modalContent.textContent = "x";

let form = document.createElement("div");
form.className = "form";

let mtitle = document.createElement("h1");
mtitle.textContent = "Editar";

let mImg = document.createElement("img");

let titulo = document.createElement("input");
titulo.type="text";

let artista = document.createElement("input");
artista.type="text"; 

let year = document.createElement("input");
year.type="text"; 

let tipo = document.createElement("input");
tipo.type="text"; 

modalC.appendChild(modalContent);
form.appendChild(mtitle);
form.appendChild(mImg);
form.appendChild(titulo);
form.appendChild(artista);
form.appendChild(year);
form.appendChild(tipo);

modalC.appendChild(form);
modal.appendChild(modalC);
document.body.appendChild(modal);
const btns = document.querySelectorAll("tr td button")
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        mImg.src = imgs[i].src;
        titulo.value = titles[i].textContent;
        artista.value = artist[i].textContent;
        year.value = years[i].textContent;
        tipo.value = gens[i].textContent;
        modal.style.display = "block";
    });
}

modalContent.addEventListener("click", () => {
    modal.style.display = "none";
});
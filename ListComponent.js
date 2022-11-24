let Cert_InnerHTML = (obj) => {
    const node = document.createElement("li");
    node.classList.add("card");
    const { name, src } = obj;

    const Img = `<img src="${src[0]}" alt="Image not Found">`;
    const Name = `<div class="txt">
                    <h1>${name}</h1>
                    <p>Click for more Details</p>
                </div>`;

    node.innerHTML = `${Img}${Name}`;
    document.getElementById("cer").appendChild(node);
}




let Proj_InnerHTML = (obj) => {
    const node = document.createElement("li");
    node.classList.add("cadr");
    const { name, src } = obj;

    const Img = `<img src="${src[0]}" alt="Image not Found">`;
    const Name = `<div class="txt">
                    <h1>${name}</h1>
                    <p>Click for more Details</p>
                </div>`;

    node.innerHTML = `${Img}${Name}`;
    document.getElementById("pj").appendChild(node);
}

const pop = document.querySelector(".pop");
const bg = document.getElementById("bg")

async function Show_Des(cert) {
    const { name, description, src } = cert;
    // ? I don;t know why it's should have 'await'
    const node = document.createElement("div");


    const div_wrap = document.createElement("div");
    div_wrap.setAttribute("class", "wrap");
    const div_a = document.createElement("div");
    div_a.setAttribute("class", "a");
    const div_b = document.createElement("div");
    div_b.setAttribute("class", "b");
    const div_c = document.createElement("div");
    div_c.setAttribute("class", "c");

    for (let s of src) {
        const node_select = document.createElement("img");
        const node_choose = document.createElement("img");

        node_select.setAttribute("src", s)
        node_choose.setAttribute("src", s)

        node_select.setAttribute("alt", "main")
        node_choose.setAttribute("alt", "im")

        node_select.setAttribute("class", "select")
        node_choose.setAttribute("class", "choose")

        div_a.appendChild(node_select);
        div_b.appendChild(node_choose);
    }

    div_c.innerHTML = ` <h1>${name}</h1>
                        <h5>${description}</h5>`

    // HTML Structure
    div_a.appendChild(div_b)
    div_wrap.appendChild(div_a);
    div_wrap.appendChild(div_c);
    node.appendChild(div_wrap);

    // APPEND OR REPLACE node
    pop.childNodes.length > 1 ?
        pop.replaceChild(node, pop.lastChild) : pop.appendChild(node)
    pop.style.display = "block";
    bg.style.display = "block";
    pop.style.animation = "appear 0.4s"
    bg.style.animation = "appear 0.4s"

    // Press ESC to Close POP
    document.getElementById('bd').addEventListener(
        'keydown', (event) => {
            if (event.keyCode === 27) Close_Des()
        })
}

let Close_Des = () => {
    pop.style.animation = "disappear 0.4s"
    bg.style.animation = "disappear 0.4s"
    setTimeout(() => {
        pop.style.display = "none";
        bg.style.display = "none";
    }, 400)
}

async function Change_Img() {
    const select = document.querySelectorAll(".select")
    const choose = document.querySelectorAll(".choose")
    for (let p of select) p.style.display = "none"

    let mem = 0;
    select[mem].style.display = "block";
    choose[mem].style.filter = "grayscale(.5)";
    choose[mem].style.border = "5px solid #212529bb"

    for (let k in choose) {
        choose[k].addEventListener('click', () => {
            if (k != mem) {
                // animation MANUALLY !!
                select[k].style.display = "block";
                select[mem].style.display = "none";
                select[k].style.animation = "appear .2s"

                choose[k].style.filter = "grayscale(.7)";
                choose[mem].style.filter = "none";
                choose[k].style.border = "5px solid #212529bb"
                choose[mem].style.border = "none"

                mem = k;

            }
        })
    }
}

export { Cert_InnerHTML, Proj_InnerHTML, Show_Des, Close_Des, Change_Img };
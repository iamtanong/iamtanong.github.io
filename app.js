import { Cert_InnerHTML, Proj_InnerHTML, Close_Des, Show_Des, Change_Img } from "./ListComponent.js";

const cert_list = [
    {
        "name": "camp1",
        "description": "this is camp1",
        "src": ["./image/img.webp", "./port/ITC.webp", "./port/payao.webp"]
    },
    {
        "name": "awkfm",
        "description": "egsegeg",
        "src": ["./port/posn_camp1.webp", "./port/wongYO.webp"]
    },
    {
        "name": "efe",
        "description": "egsegeg",
        "src": ["./port/payao.webp"]
    },
];

const proj_list = [
    {
        "name": "Blackjack888",
        "description": `เกม Blackjack บน Web Appication พัฒนาด้วย Vue.js<br>
            Blackjack เป็นเกมไพ่สำหรับเล่น 2 คนโดยแบ่งออกเป็นฝั่ง Dealer(เจ้ามือ) และ
            ฝั่งPlayer(ผู้เล่น)โดยในที่นี้จะให้ Player เล่นกับ Dealer ที่เป็นบอท โดยมี
            กติกาคือ ฝ่ายใดที่จั่วได้แต้มรวมใกล้เคียง 21 มากที่สุดจะเป็นฝ่ายชนะ แต่หากจั่ว
            ได้แต้มรวมเกิน 21 จะถูกปรับแพ้ <br><br>
            <u>หมายเหตุ</u>: ไพ่ที่จั่วมาจากการสุ่มอย่างขาวสะอาด สดใสและบริสุทธิ์
            <br>( มาจาก Math.random() )
            <br><br>
            **ขณะนี้ยังอยู่ระหว่างการพัฒนา`,
        "src": ["./port/blackjack888.webp", "./port/ITC.webp", "./port/pre_mor1.webp"]
    },
    {
        "name": "551",
        "description": "kajhfeg",
        "src": ["./port/pre_mor1.webp", "./port/thai.webp"]
    },
]

const ctf = document.querySelector(".ctf");
const Comment = `<!-- These code is from Javascript file, not HTML -->`
const headtext = ctf.innerHTML;
ctf.innerHTML = `${headtext}${Comment}`

// Loop create Li tags Certificate -> ListComponent.js
cert_list.forEach(element => { Cert_InnerHTML(element) })
// Loop create Li tags Project -> ListComponent.js
proj_list.forEach(element => { Proj_InnerHTML(element) })


const card = document.querySelectorAll(".card")
const pop = document.querySelector(".pop");
const cadr = document.querySelectorAll(".cadr")
const bg = document.getElementById("bg")
pop.style.display = "none";
bg.style.display = "none";


// Click Certificate
for (let c in cert_list) card[c].addEventListener(
    'click', async () => {
        await Show_Des(cert_list[c])
        await Change_Img();
    })
// Click Project
for (let c in proj_list) cadr[c].addEventListener(
    'click', async () => {
        await Show_Des(proj_list[c]);
        await Change_Img();
    })

// Click Close POP
document.getElementById('close').addEventListener(
    'click', Close_Des)



window.addEventListener("scroll", async (event) => {
    const body = document.documentElement;
    let down = document.querySelector(".down");


    if (body.scrollTop >= 350) {
        await setTimeout(() => {
            down.style.animation = "disappear 2.5s ease"
        }, 500);

        await setTimeout(() => {
            down.style.display = "none"
            down.style.opacity = "1"
        }, 2500)
    }
})


let kbtn = document.querySelectorAll(".toClipboard");
let contactlist = document.getElementById("contactlist")

for (let i = 0; i < kbtn.length; i++) {
    kbtn[i].onclick = async function () {
        let txt = contactlist.children[i].firstChild.innerText;
        let cptxt = txt.split(" ").length == 2 ? txt.split(" ")[1]
            : txt.split(" ")[1] + " " + txt.split(" ")[2]

        // Catch  Error
        try {
            await navigator.clipboard.writeText(cptxt)
            alert(`Copy ${cptxt} to Clipboard`)
        }
        catch (err) {
            console.log(err)
        }
    };
}

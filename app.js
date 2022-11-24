import { Cert_InnerHTML, Proj_InnerHTML, Close_Des, Show_Des, Change_Img } from "./ListComponent.js";

const cert_list = [
    {
        "name": "camp1",
        "description": "this is camp1",
        "src": ["./image/img.jpg", "./port/ITC.png", "./port/payao.png"]
    },
    {
        "name": "awkfm",
        "description": "egsegeg",
        "src": ["./port/posn_camp1.jpg", "./port/wongYO.png"]
    },
    {
        "name": "efe",
        "description": "egsegeg",
        "src": ["./port/payao.png"]
    },
];

const proj_list = [
    {
        "name": "Blackjack888",
        "description": `เกม Blackjack บน Web Appication พัฒนาด้วย Vue.js<br>
            Blackjack เป็นเกมไพ่สำหรับเล่น 2 คนโดยแบ่งออกเป็นฝั่ง Deeler(เจ้ามือ) และ
            ฝั่งPlayer(ผู้เล่น)โดยในที่นี้จะให้ Player เล่นกับ Deeler ที่เป็นบอท โดยมี
            กติกาคือ ฝ่ายใดที่จั่วได้แต้มรวมใกล้เคียง 21 มากที่สุดจะเป็นฝ่ายชนะแต่หากจั่ว
            ได้แต้มรวมเกิน 21 จะแพ้ <br><br><u>หมายเหตุ</u>: ไพ่ที่จั่วมาจากการสุ่มอย่างขาวสะอาด สดใสและบริสุทธิ์<br><br>**ขณะนี้ยังอยู่ระหว่างการพัฒนา`,
        "src": ["./image/bj888.png", "./port/ITC.png", "./port/pre_mor1.png"]
    },
    {
        "name": "551",
        "description": "kajhfeg",
        "src": ["./port/pre_mor1.png", "./port/thai.png"]
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

let clk = 0;
// Click Certificate
for (let c in cert_list) card[c].addEventListener(
    'click', async () => {
        clk++;
        if (clk === 1) console.info("There's ERROR Appear but I don't know WHY it's still work OR HOW to fix. //tanong_eexe");
        await Show_Des(cert_list[c])
        await Change_Img();
    })
// Click Project
for (let c in proj_list) cadr[c].addEventListener(
    'click', async () => {
        clk++;
        if (clk === 1) console.info("There's ERROR Appear but I don't know WHY it's still work OR HOW to fix. //tanong_eexe");
        await Show_Des(proj_list[c]);
        await Change_Img();
    })

// Click Close POP
document.getElementById('close').addEventListener(
    'click', Close_Des)

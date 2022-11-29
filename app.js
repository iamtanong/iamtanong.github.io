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

let clk = 0;
// Click Certificate
for (let c in cert_list) card[c].addEventListener(
    'click', async () => {
        clk++;
        if (clk === 1) console.info("There's ERROR Appear but I don't know WHY it's still work OR HOW to fix. //iamtanong");
        await Show_Des(cert_list[c])
        await Change_Img();
    })
// Click Project
for (let c in proj_list) cadr[c].addEventListener(
    'click', async () => {
        clk++;
        if (clk === 1) console.info("There's ERROR Appear but I don't know WHY it's still work OR HOW to fix. //iamtanong");
        await Show_Des(proj_list[c]);
        await Change_Img();
    })

// Click Close POP
document.getElementById('close').addEventListener(
    'click', Close_Des)

// Hide scroll down text
window.onscroll = async function () {
    // let down = document.querySelector(".down")
    // await setInterval(() => {
    //     down.style.animation = "disappear 4s ease"
    // }, 500)
    // setInterval(() => { down.style.display = "none" }, 4000)
}

// window.onscroll = async function () {
//     var B = document.body; //IE 'quirks'
//     var D = document.documentElement; //IE with doctype
//     D = (D.clientHeight) ? D : B;
//     let down = document.querySelector(".down")

//     if (D.scrollTop < 250 && down.style.display == "none") {
//         console.log("back")
//         await setInterval(() => {
//             down.style.animation = "appear 4s ease"
//         }, 500)
//         setInterval(() => { down.style.display = "block" }, 4000)
//     }
//     else if (D.scrollTop > 500 && (down.style.display == "block" || down.style.display == '')) {
//         console.log("gone")
//         await setInterval(() => {
//             down.style.animation = "disappear 4s ease"
//         }, 500)
//         setInterval(() => { down.style.display = "none" }, 4000)
//     }

// }

const body = document.documentElement;
let cnt = 0;
window.addEventListener("scroll", async (event) => {
    let down = document.querySelector(".down");

    if (body.scrollTop <= 150 && (down.style.display != "" && cnt == 0)) {
        cnt = 1;
        down.style.display = "block"
        down.style.opacity = "0"
        await setTimeout(() => {
            down.style.animation = "appear 2.5s ease"
        }, 500);
        await setTimeout(() => {
            down.style.opacity = "1"
        }, 2500)

    }
    else if (body.scrollTop >= 550 && cnt == 0) {
        cnt = 1;
        await setTimeout(() => {
            down.style.animation = "disappear 2.5s ease"
        }, 500);

        await setTimeout(() => {
            down.style.display = "none"
        }, 2500)
    }
    else if (body.scrollTop > 150 && body.scrollTop < 550 && cnt == 1) cnt = 0;
})



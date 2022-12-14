import { Cert_InnerHTML, Proj_InnerHTML, Close_Des, Show_Des } from "./ListComponent.js";

console.warn("This website is not finist yet.\n I'm so sorry.")

const cert_list = [
    {
        "name": "ค่ายสอวน.ค่าย 1 และ 2 สาขาคอมพิวเตอร์",
        "description": `เข้าร่วมค่ายสอวน.ค่าย 1 และ 2 สาขาคอมพิวเตอร์ ศูนย์มหาวิทยาลัยวลัยลักษณ์<br>ประจำปีการศึกษา 2564`,
        "src": ["./port/posn_camp2.webp", "./port/pccwu.jpg", "./port/279151887_528583818803247_7542267046264112051_n.jpg"]
    },
    {
        "name": "การประกวดนวัตกรรมสร้างเสริมสุขภาพ",
        "description": `เข้าร่วมรอบ 20 ทีมสุดท้าย ในการประกวดนวัตกรรมสร้างเสริมสุขภาพ Thai Health INNO Award ครั้งที่ 3 จัดโดยสสส.`,
        "src": ["./port/sorsorsor.webp"]
    },
    {
        "name": "ค่าย IT Camp ครั้งที่ 18",
        "description": `เข้าร่วมค่าย IT Camp ครั้งที่ 18 จัดโดยคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง`,
        "src": ["./port/ITC.webp"]
    },
    {
        "name": "การแข่งขัน BAMSO ครั้งที่ 1",
        "description": `เข้ารอบ 10 ทีมสุดท้าย ในสาขาคอมพิวเตอร์ การแข่งขันตอบปัญหาวิชาการทางวิทยาศาสตร์และคณิตศาสตร์ จัดโดยโรงเรียนบดินทรเดชา(สิงห์ สิงหเสนี) (BAMSO ครั้งที่ 1)`,
        "src": ["./port/bamso.webp"]
    },
    {
        "name": `การแข่งขันมหกรรมวิชาการระดับชาติ "นวัตกรรม เทคโนโลยี 46ICT พัฒนาสู่มาตรฐานสากล"`,
        "description": `ได้รับรางวัลเหรียญเงินการแข่งขันโครงงานสะเต็มศึกษาและกล่องสมองกล(STEM & microcontroller Project)นำเสนอภาษาอังกฤษ ระดับชั้นม.4-6 ในการแข่งขันมหกรรมวิชาการระดับชาติ "นวัตกรรม เทคโนโลยี 46ICT พัฒนาสู่มาตรฐานสากล" จัดโดยกลุ่มโรงเรียนผู้นำ 46ICT โรงเรียนในฝันและเครือข่าย ณ โรงเรียนพะเยาพิทยาคมและมหาวิทยาลัยพะเยา"`,
        "src": ["./port/payao.webp"]
    },
    {
        "name": "เข้าร่วมการแข่งขัน World Robot Game Thailand Championship 2018",
        "description": `เข้าร่วมการแข่งขัน World Robot Game Thailand Championship 2018 ในหมวดการแข่ง หุ่นยนต์ดับเพลิง จัดโดยบริษัท อินโนเวตีฟ เอกเพอริเมนต์ จำกัด ณ ศูนย์การค้าเดอะฮับรังสิต`,
        "src": ["./port/wrg.webp"]
    },
    {
        "name": "สตาฟกิจกรรมเปิดบ้านวิชาการ Open House 2022",
        "description": `เป็นสตาฟกิจกรรม Robotics & Coding Workshop ในกิจกรรมเปิดบ้านวิชาการ Open house 2022 โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช`,
        "src": ["./port/เกียรติบัตร Open House.png"]
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
        "src": ["./port/blackjack888.webp"]
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
    'click', async () => { await Show_Des(cert_list[c]) })
// Click Project
for (let c in proj_list) cadr[c].addEventListener(
    'click', async () => { await Show_Des(proj_list[c]); })

// Click Close POP
document.getElementById('close').addEventListener(
    'click', Close_Des)
// Click Outside Close POP
document.getElementById('bg').addEventListener(
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

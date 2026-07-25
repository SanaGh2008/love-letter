const letter = `سلام به عزیز ترینم.

درسته که پیام میدیم و حرف میزنیم ولی خواستم این سری یه جور دیگه عشق و علاقه بی‌نهایتمو بهت برای بار هزارم بگم و بهت نشون بدم که یه نفر یه جای دیگه از این دنیا هست که هر روز به تو فکر میکنه و لحظه‌شماری میکنه برای دیدنت.

درسته که از هم دوریم و بین ما فاصله‌ست، ولی هر دفعه که باهات حرف میزنم این فاصله برام کمرنگ‌تر و کوچیک‌تر میشه.

و خب من بی‌صبرانه منتظر روزی می‌مونم که تموم نیشخندهایی که می‌زدی و نمی‌تونستم از نزدیک ببینمشون رو ببینم و بوس‌بوسیت کنم...

بودنت توی زندگیم همه‌جوره واسم باعث دلگرمی و خوشحالیه. دلم می‌خواست کاش می‌دونستی و می‌دیدی که چطور با هر پیامی که بهم میدی انقدر خوشحال میشم و ذوق می‌کنم که واقعاً انگار دنیا رو بهم دادن.

واقعاً هم همینطوره.

بودنت واسم خیلی عزیزه و همیشه همین‌طور می‌مونه. وجودت برام دلگرم‌کننده‌ترین چیز ممکنه و از اینکه هستی و کنار منی، از صمیم قلبم خوشحالم.

احساس می‌کنم بالاخره منم اون آدم درست زندگیمو پیدا کردم.

فقط می‌تونم بگم چقدر خوش‌شانس بودم که باهات آشنا شدم و با هم به اینجا رسیدیم و بارها و بارها به خاطر بودنت کنارم از خدا ممنونم.

و در آخر...

دوستت دارم،
بیشتر از آنچه که کلمات بتوانند بگویند.`;

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const letterBox = document.getElementById("letter");

let i = 0;

startBtn.onclick = () => {

    document.querySelector("h1").style.display = "none";

    startBtn.style.display = "none";

    letterBox.classList.remove("hidden");

    music.currentTime = 0;

    music.play()
        .then(() => {
            console.log("Music started successfully");
        })
        .catch(error => {
            console.log("Music could not play:", error);
        });

    type();
};


function type() {

    if (i < letter.length) {

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(type, 45);

    }

}


/* ستاره‌ها */

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(star);

}


/* قلب‌ها */

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 400);


/* شهاب‌ها */

setInterval(() => {

    const s = document.createElement("div");

    s.className = "shoot";

    document.body.appendChild(s);

    setTimeout(() => {

        s.remove();

    }, 2500);

}, 9000);
startBtn.onclick = () => {

    document.querySelector("h1").style.display = "none";

    startBtn.style.display = "none";

    letterBox.classList.remove("hidden");

    document.querySelectorAll(".walking-cat").forEach(cat => {
        cat.style.display = "none";
    });

    music.play();

    type();

};
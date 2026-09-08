/* =========================
   DATA MEMBER
========================= */

const members = [
    { name: "Feni Fitriyanti", gen: 3, image: "1.jpg" },
    { name: "Gita Sekar Andarini", gen: 6, image: "2.jpg" },
    { name: "Freyana Jayawardana", gen: 7, image: "3.jpg" },
    { name: "Angelina Christy", gen: 7, image: "4.jpg" },
    { name: "Jessica Chandra", gen: 7, image: "5.jpg" },
    { name: "Febriola Sinambela", gen: 7, image: "6.jpg" },
    { name: "Mutiara Azzahra", gen: 7, image: "7.jpg" },
    { name: "Helisma Putri", gen: 7, image: "8.jpg" },
    { name: "Lulu Salsabila", gen: 8, image: "9.jpg" },
    { name: "Cornelia Vaniesa", gen: 8, image: "10.jpg" },
    { name: "Fiony Alveria Tantri", gen: 8, image: "11.jpg" },
    { name: "Indah Cahya Nabilla", gen: 9, image: "12.jpg" },
    { name: "Marsha Lenathea", gen: 9, image: "13.jpg" },
    { name: "Kathrina Irene", gen: 9, image: "14.jpg" },
    { name: "Jesslyn Elly", gen: 10, image: "15.jpg" },
    { name: "Aurellia", gen: 10, image: "16.jpg" },
    { name: "Gabriella Abigail", gen: 10, image: "17.jpg" },
    { name: "Raisha Shifa", gen: 10, image: "18.jpg" },
    { name: "Anindya Ramadhani", gen: 11, image: "19.jpg" },
    { name: "Cynthia Yaputera", gen: 11, image: "20.jpg" },
    { name: "Celline Thefani", gen: 11, image: "21.jpg" },
    { name: "Dena Natalia", gen: 11, image: "22.jpg" },
    { name: "Daisy Natalia", gen: 11, image: "23.jpg" },
    { name: "Grace Octaviani", gen: 11, image: "24.jpg" },
    { name: "Greesella Adhalia", gen: 11, image: "25.jpg" },
    { name: "Michelle Alexandra", gen: 11, image: "26.jpg" },
    { name: "Catherina Vallencia", gen: 12, image: "27.jpg" },
    { name: "Oline Manuel", gen: 12, image: "28.jpg" },
    { name: "Adeline Wijaya", gen: 12, image: "29.jpg" },
    { name: "Hillary Abigail", gen: 12, image: "30.jpg" },
    { name: "Fritzy Rosmerian", gen: 12, image: "31.jpg" },
    { name: "Aurhel Alana", gen: 12, image: "32.jpg" },
    { name: "Abigail Rachel", gen: 12, image: "33.jpg" },
    { name: "Nayla Suji", gen: 12, image: "34.jpg" },
    { name: "Nina Tutachia", gen: 12, image: "35.jpg" },
    { name: "Shabilqis Naila", gen: 12, image: "36.jpg" },
    { name: "Ribka Budiman", gen: 12, image: "37.jpg" },
    { name: "Jazzlyn Trisha", gen: 12, image: "38.jpg" },
    { name: "Michelle Levia", gen: 12, image: "39.jpg" },
    { name: "Victoria Kimberly", gen: 12, image: "40.jpg" },
    { name: "Nur Intan", gen: 13, image: "41.jpg" },
    { name: "Jemima Evodie", gen: 13, image: "42.jpg" },
    { name: "Mikaela Kusjanto", gen: 13, image: "43.jpg" },
    { name: "Astrella Virgiananda", gen: 13, image: "44.jpg" },
    { name: "Jacqueline Imanuel", gen: 13, image: "45.jpg" },
    { name: "Bong Aprilli", gen: 13, image: "46.jpg" },
    { name: "Hagia Sophia", gen: 13, image: "47.jpg" },
    { name: "Humairah Ramadhani", gen: 13, image: "48.jpg" },
    { name: "Heidi Suyangga", gen: 14, image: "49.jpg" },
    { name: "Christabella Bonita", gen: 14, image: "50.jpg" },
    { name: "Sona Kalyana", gen: 14, image: "51.jpg" },
    { name: "Maxine Faye", gen: 14, image: "52.jpg" },
    { name: "Ralyne Van Irwan", gen: 14, image: "53.jpg" },
    { name: "Putry Jazzyta", gen: 14, image: "54.jpg" },
    { name: "Afera Thalia", gen: 14, image: "55.jpg" },
    { name: "Fahira Putri", gen: 14, image: "56.jpg" },
    { name: "Fatimah Azzahra", gen: 14, image: "57.jpg" },
    { name: "Carissa Dini", gen: 14, image: "58.jpg" }
];

let selectedGens = [];
let selectedMembers = [];
let remainingMembers = [];
let ranking = [];
let currentA = null;
let currentB = null;
let wins = {};
let finishedMembers = [];
let totalWinsNeeded = 0;
let completedWins = 0;

let undoState = null;

const game = document.getElementById("gameArea");
const resultArea = document.getElementById("resultArea");
const rankingList = document.getElementById("rankingList");

const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");

const tieButton = document.getElementById("tieButton");
const undoButton = document.getElementById("undoButton");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const startButton = document.getElementById("startButton");

const generationButtons =
    document.querySelectorAll(".generation-btn");


/* =========================
   PILIH GENERASI
========================= */

generationButtons.forEach(button => {

    button.addEventListener("click", () => {

        const gen = button.dataset.gen;

        if (gen === "all") {

            selectedGens = [];

            generationButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            return;
        }

        const allButton =
            document.querySelector('[data-gen="all"]');

        allButton.classList.remove("active");

        const number = Number(gen);

        if (selectedGens.includes(number)) {

            selectedGens =
                selectedGens.filter(g => g !== number);

            button.classList.remove("active");

        } else {

            selectedGens.push(number);

            button.classList.add("active");
        }
    });
});


/* =========================
   MULAI GAME
========================= */

startButton.addEventListener("click", startGame);

function startGame() {

    if (
        selectedGens.length === 0 &&
        !document
            .querySelector('[data-gen="all"]')
            .classList.contains("active")
    ) {

        alert("Pilih minimal satu generasi!");

        return;
    }


    const allSelected =
        document
            .querySelector('[data-gen="all"]')
            .classList
            .contains("active");


    if (allSelected) {

        selectedMembers = [...members];

    } else {

        selectedMembers =
            members.filter(member =>
                selectedGens.includes(member.gen)
            );
    }


    if (selectedMembers.length < 2) {

        alert("Minimal harus ada 2 member!");

        return;
    }


    ranking = [];

    finishedMembers = [];

    completedWins = 0;

    undoState = null;

    wins = {};


    selectedMembers.forEach(member => {
        wins[member.name] = 0;
    });


    totalWinsNeeded =
        selectedMembers.length * 5;


    remainingMembers =
        [...selectedMembers];

    shuffle(remainingMembers);


    currentA = remainingMembers.shift();
    currentB = remainingMembers.shift();


    document
        .querySelector(".generation-box")
        .style.display = "none";


    game.style.display = "block";

    resultArea.style.display = "none";


    if (undoButton) {
        undoButton.disabled = true;
    }


    updateProgress();

    showBattle();
}


/* =========================
   TAMPILKAN PERTANDINGAN
========================= */

function showBattle() {

    if (!currentA || !currentB) {
        return;
    }


    choiceA.innerHTML = `
        <img
            src="./sorter-image/${currentA.image}"
            alt="${currentA.name}"
        >
        <span>${currentA.name}</span>
    `;


    choiceB.innerHTML = `
        <img
            src="./sorter-image/${currentB.image}"
            alt="${currentB.name}"
        >
        <span>${currentB.name}</span>
    `;
}


/* =========================
   PILIH MEMBER
========================= */

choiceA.addEventListener("click", () => {
    battle(currentA, currentB);
});


choiceB.addEventListener("click", () => {
    battle(currentB, currentA);
});


/* =========================
   SIMPAN UNDO
========================= */

function saveUndoState() {

    undoState = {

        remainingMembers:
            [...remainingMembers],

        ranking:
            [...ranking],

        wins:
            {...wins},

        finishedMembers:
            [...finishedMembers],

        currentA:
            currentA,

        currentB:
            currentB,

        completedWins:
            completedWins
    };


    if (undoButton) {
        undoButton.disabled = false;
    }
}


/* =========================
   UNDO
========================= */

if (undoButton) {

    undoButton.addEventListener(
        "click",
        undoLastChoice
    );
}


function undoLastChoice() {

    if (!undoState) {
        return;
    }


    remainingMembers =
        [...undoState.remainingMembers];

    ranking =
        [...undoState.ranking];

    wins =
        {...undoState.wins};

    finishedMembers =
        [...undoState.finishedMembers];

    currentA =
        undoState.currentA;

    currentB =
        undoState.currentB;

    completedWins =
        undoState.completedWins;


    undoState = null;

    undoButton.disabled = true;


    updateProgress();

    showBattle();
}


/* =========================
   TIE
========================= */

tieButton.addEventListener("click", () => {

    if (!currentA || !currentB) {
        return;
    }


    saveUndoState();


    remainingMembers.push(currentA);
    remainingMembers.push(currentB);


    shuffle(remainingMembers);


    if (remainingMembers.length < 2) {
        finishGame();
        return;
    }


    currentA =
        remainingMembers.shift();

    currentB =
        remainingMembers.shift();


    showBattle();
});


/* =========================
   BATTLE
========================= */

function battle(winner, loser) {

    if (!winner || !loser) {
        return;
    }


    saveUndoState();


    wins[winner.name]++;

    completedWins++;


    /*
       MASUKKAN KEMBALI MEMBER
       YANG BARU BERTANDING
    */

    if (
        wins[loser.name] < 5 &&
        !finishedMembers.includes(loser.name)
    ) {

        remainingMembers.push(loser);
    }


    if (
        wins[winner.name] < 5 &&
        !finishedMembers.includes(winner.name)
    ) {

        remainingMembers.push(winner);
    }


    /*
       JIKA SUDAH MENANG 5X
    */

    if (wins[winner.name] >= 5) {

        if (!finishedMembers.includes(winner.name)) {

            finishedMembers.push(winner.name);

            ranking.push(winner);
        }


        remainingMembers =
            remainingMembers.filter(
                member =>
                    member.name !== winner.name
            );
    }


    /*
       SEMUA SELESAI
    */

    if (
        finishedMembers.length >=
        selectedMembers.length
    ) {

        finishGame();

        return;
    }


    /*
       CARI DUA MEMBER BERIKUTNYA
    */

    let candidates;


    const progress =
        completedWins / totalWinsNeeded;


    /*
       SEBELUM 80%:
       jangan langsung munculkan
       member yang baru dipilih
    */

    if (progress < 0.8) {

        candidates =
            remainingMembers.filter(member =>
                member.name !== winner.name &&
                member.name !== loser.name
            );

    } else {

        /*
           SETELAH 80%:
           boleh muncul lagi
        */

        candidates =
            [...remainingMembers];
    }


    /*
       JIKA KURANG DARI 2
    */

    if (candidates.length < 2) {

        candidates =
            remainingMembers.filter(member =>
                !finishedMembers.includes(member.name)
            );
    }


    /*
       MASIH KURANG 2?
    */

    if (candidates.length < 2) {

        candidates =
            selectedMembers.filter(member =>
                !finishedMembers.includes(member.name)
            );
    }


    /*
       JIKA BENAR-BENAR TINGGAL 1
    */

    if (candidates.length < 2) {

        finishGame();

        return;
    }


    shuffle(candidates);


    currentA = candidates[0];
    currentB = candidates[1];


    /*
       HAPUS KEDUA MEMBER
       DARI ANTRIAN
    */

    remainingMembers =
        remainingMembers.filter(member =>
            member.name !== currentA.name &&
            member.name !== currentB.name
        );


    updateProgress();

    showBattle();
}


/* =========================
   PROGRESS
========================= */

function updateProgress() {

    if (totalWinsNeeded === 0) {
        return;
    }


    let percent =
        Math.floor(
            (completedWins / totalWinsNeeded) * 100
        );


    if (
        finishedMembers.length <
        selectedMembers.length &&
        percent >= 100
    ) {

        percent = 99;
    }


    if (percent > 100) {
        percent = 100;
    }


    progressBar.style.width =
        percent + "%";


    progressText.textContent =
        percent + "%";
}


/* =========================
   HASIL AKHIR
========================= */

function finishGame() {

    /*
       Tambahkan member yang belum masuk
       supaya semua tetap ada di ranking
    */

    selectedMembers.forEach(member => {

        if (
            !ranking.some(
                item => item.name === member.name
            )
        ) {

            ranking.push(member);
        }
    });


    /*
       Hapus ranking duplikat
    */

    const unique = [];


    ranking.forEach(member => {

        if (
            !unique.some(
                item => item.name === member.name
            )
        ) {

            unique.push(member);
        }
    });


    ranking = unique;


    progressBar.style.width = "100%";

    progressText.textContent = "100%";


    game.style.display = "none";

    resultArea.style.display = "block";


    rankingList.innerHTML = "";


    ranking.forEach((member, index) => {

        const item =
            document.createElement("div");


        item.className = "ranking-item";


        item.innerHTML = `
            <div class="ranking-number">
                ${index + 1}
            </div>

            <img
                src="./sorter-image/${member.image}"
                alt="${member.name}"
            >

            <div class="ranking-name">
                ${member.name}
            </div>
        `;


        rankingList.appendChild(item);
    });
}


/* =========================
   SHUFFLE
========================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }


    return array;
}
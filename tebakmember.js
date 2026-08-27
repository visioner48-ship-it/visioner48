/* =====================================================
   GAME TEBAK MEMBER JKT48
   VISIONER48
===================================================== */


/* =====================================================
   DATA SOAL AWAL
===================================================== */

const soalDefault = [

    {
        gambar: "image/tebakmember/soal1.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Indah Cahya",
            "Marsha Lenathe",
            "Cornelia Vanisa",
            "Kathrina Irene"
        ],
        jawaban: "Indah Cahya"
    },

    {
        gambar: "image/tebakmember/soal2.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Febriolla Sinambela",
            "Jessica Chandra",
            "Freya Jayawardana",
            "Fiony Alveria Tantri"
        ],
        jawaban: "Fiony Alveria Tantri"
    },

    {
        gambar: "image/tebakmember/soal3.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Cynthia Yaputera",
            "Aurellia",
            "Victoria Kimberly",
            "Lulu Salsabila"
        ],
        jawaban: "Aurellia"
    },

    {
        gambar: "image/tebakmember/soal4.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Freya Jayawardana",
            "Michelle Alexandra",
            "Cynthia Yaputera",
            "Celline Thefani"
        ],
        jawaban: "Cynthia Yaputera"
    },

    {
        gambar: "image/tebakmember/soal5.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Fritzy Rosmerian",
            "Catherine Vallencia",
            "Aurhel Alana",
            "Adeline Wijaya"
        ],
        jawaban: "Aurhel Alana"
    },

    {
        gambar: "image/tebakmember/soal6.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Anindya Ramadhani",
            "Lulu Salsabila",
            "Oline Manuel",
            "Hillary Abigail"
        ],
        jawaban: "Anindya Ramadhani"
    },

    {
        gambar: "image/tebakmember/soal7.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Jeslyn Elly",
            "Raisha Syifa",
            "Gabriela Abigail",
            "Alya Amanda"
        ],
        jawaban: "Alya Amanda"
    },

    {
        gambar: "image/tebakmember/soal8.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Nina Tutachia",
            "Michelle Levia",
            "Angelina Christy",
            "Abigail Rachel"
        ],
        jawaban: "Abigail Rachel"
    },

    {
        gambar: "image/tebakmember/soal9.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Angelina Christy",
            "Jessica Chandra",
            "Gita Sekar",
            "Grace Octaviani"
        ],
        jawaban: "Angelina Christy"
    },

    {
        gambar: "image/tebakmember/soal10.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Katrina Vallencia",
            "Cornelia Vanisa",
            "Catherina Vallencia",
            "Dena Natalia"
        ],
        jawaban: "Catherina Vallencia"
    },

    {
        gambar: "image/tebakmember/soal11.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Cornelia Vanisa",
            "Helisma Putri",
            "Freya Jayawardana",
            "Michelle Levia"
        ],
        jawaban: "Cornelia Vanisa"
    },

    {
        gambar: "image/tebakmember/soal12.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Desy Natalia",
            "Feni Fitriyanti",
            "Dena Natalia",
            "Ribka Budiman"
        ],
        jawaban: "Dena Natalia"
    },

    {
        gambar: "image/tebakmember/soal13.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Bong Aprili",
            "Aurellia",
            "Desy Natalia",
            "Dena Natalia"
        ],
        jawaban: "Desy Natalia"
    },

    {
        gambar: "image/tebakmember/soal14.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Freya Jayawardana",
            "Feni Fitriyanti",
            "Fiony Alveria",
            "Febriola Sinambela"
        ],
        jawaban: "Feni Fitriyanti"
    },

    {
        gambar: "image/tebakmember/soal15.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Grace Octaviani",
            "Greesella Adhalia",
            "Gita Sekar",
            "Marsha Lenathea"
        ],
        jawaban: "Gita Sekar"
    },

    {
        gambar: "image/tebakmember/soal16.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Freyana Jayawardana",
            "Catherina Vallencia",
            "Aulia Riza",
            "Nur Intan"
        ],
        jawaban: "Freyana Jayawardana"
    },

    {
        gambar: "image/tebakmember/soal17.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Michelle Alexandra",
            "Febriola Sinambela",
            "Hillary Abigail",
            "Aurhel Alana"
        ],
        jawaban: "Febriola Sinambela"
    },

    {
        gambar: "image/tebakmember/soal18.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Indah Cahya",
            "Jeslyn Elly",
            "Fiony Alveria",
            "Helisma Putri"
        ],
        jawaban: "Helisma Putri"
    },

    {
        gambar: "image/tebakmember/soal19.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Marsha Lenathea",
            "Michelle Levia",
            "Mutiara Azzahra",
            "Nina Tutachia"
        ],
        jawaban: "Marsha Lenathea"
    },

    {
        gambar: "image/tebakmember/soal20.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Jessica Chandra",
            "Jemima Evodie",
            "Jesslyn Elly",
            "Lulu Salsabila"
        ],
        jawaban: "Jesslyn Elly"
    },

    {
        gambar: "image/tebakmember/soal21.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Aulia Riza",
            "Mikaela Kusuanto",
            "Aurellia",
            "Nur Intan"
        ],
        jawaban: "Aulia Riza"
    },

    {
        gambar: "image/tebakmember/soal22.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Bong Aprili",
            "Jemima Evodie",
            "Hagia Sophia",
            "Celline Thefani"
        ],
        jawaban: "Jemima Evodie"
    },

    {
        gambar: "image/tebakmember/soal23.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Nina Tutachia",
            "Nayla Suji",
            "Nur Intan",
            "Shabilqis Naila"
        ],
        jawaban: "Nur Intan"
    },

    {
        gambar: "image/tebakmember/soal24.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Gabriella Abigail",
            "Jacqueline Imanuela",
            "Abigail Mawengkang",
            "Adeine Wijaya"
        ],
        jawaban: "Jacqueline Imanuela"
    },

    {
        gambar: "image/tebakmember/soal25.jpg",
        pertanyaan: "Siapakah member pada gambar ini?",
        pilihan: [
            "Mikaela Kusjanto",
            "Marsha Lenathea",
            "Hillary Abigail",
            "Jesslyn Elly"
        ],
        jawaban: "Mikaela Kusjanto"
    }

];


/* =====================================================
   AMBIL DATA SOAL
===================================================== */

function ambilSoal() {

    const data =
        localStorage.getItem("tebakMemberSoal");

    if (data) {

        return JSON.parse(data);

    }

    return soalDefault;

}


/* =====================================================
   VARIABEL GAME
===================================================== */

let semuaSoal = [];

let soalGame = [];

let soalSekarang = 0;

let jumlahSoal = 0;

let skor = 0;

let sudahMenjawab = false;


/* =====================================================
   ACAK ARRAY
===================================================== */

function acakArray(array) {

    return array
        .map(value => ({
            value,
            random: Math.random()
        }))
        .sort((a, b) => a.random - b.random)
        .map(item => item.value);

}


/* =====================================================
   MULAI GAME
===================================================== */

function mulaiGame(jumlah) {

    semuaSoal = ambilSoal();

    jumlahSoal = jumlah;

    skor = 0;

    soalSekarang = 0;

    sudahMenjawab = false;


    /*
       ACAK SOAL
    */

    soalGame =
        acakArray([...semuaSoal])
        .slice(0, jumlahSoal);


    document.getElementById("menuGame")
        .style.display = "none";


    document.getElementById("hasilAkhir")
        .style.display = "none";


    document.getElementById("areaGame")
        .style.display = "block";


    tampilkanSoal();

}


/* =====================================================
   TAMPILKAN SOAL
===================================================== */

function tampilkanSoal() {

    sudahMenjawab = false;


    const soal =
        soalGame[soalSekarang];


    document.getElementById("nomorSoal")
        .textContent =
        "Soal " +
        (soalSekarang + 1) +
        " / " +
        jumlahSoal;


    document.getElementById("skorSementara")
        .textContent =
        "Skor: " + skor;


    document.getElementById("gambarMember")
        .src =
        soal.gambar;


    document.getElementById("pertanyaanText")
        .textContent =
        soal.pertanyaan;


    const pilihan =
        document.getElementById("pilihanJawaban");


    pilihan.innerHTML = "";


    const hasil =
        document.getElementById("hasilJawaban");


    hasil.innerHTML = "";


    document.getElementById("btnLanjut")
        .style.display = "none";


    /*
       ACAK PILIHAN JAWABAN
    */

    const pilihanAcak =
        acakArray([...soal.pilihan]);


    pilihanAcak.forEach(
        function(jawaban) {

            const tombol =
                document.createElement("button");


            tombol.className =
                "jawaban";


            tombol.textContent =
                jawaban;


            tombol.onclick =
                function() {

                    cekJawaban(
                        jawaban,
                        tombol
                    );

                };


            pilihan.appendChild(tombol);

        }
    );

}


/* =====================================================
   CEK JAWABAN
===================================================== */

function cekJawaban(
    jawabanDipilih,
    tombolDipilih
) {

    if (sudahMenjawab) {
        return;
    }


    sudahMenjawab = true;


    const soal =
        soalGame[soalSekarang];


    const semuaTombol =
        document.querySelectorAll(
            ".jawaban"
        );


    semuaTombol.forEach(
        function(tombol) {

            tombol.disabled = true;

        }
    );


    const hasil =
        document.getElementById(
            "hasilJawaban"
        );


    if (
        jawabanDipilih ===
        soal.jawaban
    ) {

        skor++;


        tombolDipilih.classList.add(
            "benar"
        );


        hasil.innerHTML =
            '<span class="hasil-benar">' +
            '✓ Jawaban kamu benar!' +
            '</span>';

    } else {

        tombolDipilih.classList.add(
            "salah"
        );


        semuaTombol.forEach(
            function(tombol) {

                if (
                    tombol.textContent ===
                    soal.jawaban
                ) {

                    tombol.classList.add(
                        "benar"
                    );

                }

            }
        );


        hasil.innerHTML =
            '<span class="hasil-salah">' +
            '✗ Jawaban salah.<br>' +
            'Jawaban yang benar: ' +
            soal.jawaban +
            '</span>';

    }


    document.getElementById(
        "skorSementara"
    ).textContent =
        "Skor: " + skor;


    document.getElementById(
        "btnLanjut"
    ).style.display =
        "block";

}


/* =====================================================
   SOAL BERIKUTNYA
===================================================== */

function soalBerikutnya() {

    soalSekarang++;


    if (
        soalSekarang >=
        soalGame.length
    ) {

        tampilkanHasil();

        return;

    }


    tampilkanSoal();

}


/* =====================================================
   HASIL AKHIR
===================================================== */

function tampilkanHasil() {

    document.getElementById(
        "areaGame"
    ).style.display = "none";


    document.getElementById(
        "hasilAkhir"
    ).style.display = "block";


    document.getElementById(
        "jumlahBenar"
    ).textContent =
        skor + " / " + jumlahSoal;


    const nilai =
        Math.round(
            (skor / jumlahSoal) * 100
        );


    document.getElementById(
        "nilaiAkhir"
    ).textContent =
        nilai;

}


/* =====================================================
   MAIN LAGI
===================================================== */

function mainLagi() {

    document.getElementById(
        "hasilAkhir"
    ).style.display = "none";


    document.getElementById(
        "menuGame"
    ).style.display = "block";

}


/* =====================================================
   KEMBALI KE MENU GAME
===================================================== */

function kembaliGame() {

    window.location.href =
        "game.html";

}
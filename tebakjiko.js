// ==========================================
// GAME TEBAK JIKO OSHI
// 50 SOAL
// ==========================================

const daftarSoal = [

    {
        soal: "Jiko siapakah: Matahari yang indah yang akan selalu memberikan kehangatan setiap harinya.",
        pilihan: ["Alya", "Feni", "Lily", "Gracia"],
        jawaban: "Feni"
    },

    {
        soal: "Jiko siapakah: Diam bukan berarti tak memperhatikanmmu,Aku?",
        pilihan: ["Lily", "Gita", "Muthe", "Christy"],
        jawaban: "Gita"
    },

    {
        soal: "Jiko siapakah: Peduli dan berbaik hati, siapakah dia?",
        pilihan: ["Christy", "Fiony", "Kathrina", "Gita"],
        jawaban: "Christy"
    },

    {
        soal: "Jiko siapakah: Dengan keajaibanku, aku akan membuat kalian selalu tertawa. Halo, Aku...si mechanic girl!",
        pilihan: ["Fiony", "Olla", "Freya", "Alya"],
        jawaban: "Olla"
    },

    {
        soal: "Jiko siapakah: Dengan kelincahanku, Aku akan menari setiap hari. Panggil Aku, Mu mu mu mu?",
        pilihan: ["Muthe", "Gita", "Christy", "Marsha"],
        jawaban: "Muthe"
    },

    {
        soal: "Jiko siapakah: Gadis koleris yang suka berimajinasi, terangi harimu dengan senyuman karamelku?",
        pilihan: ["Fiony", "Lily", "Alya", "Freya"],
        jawaban: "Freya"
    },

    {
        soal: "Jiko siapakah: Suka menari dan akan selalu berusaha untuk menjadi sumber energimu?",
        pilihan: ["Christy", "Freya", "Gita", "Jessi"],
        jawaban: "Jessi"
    },

    {
        soal: "Jiko siapakah: Bagai lembayung senja, dengan energi kegembiraanku, Aku akan menghangatkan suasana,hallo,hallo aku siapa?",
        pilihan: ["Gita", "Marsha", "Eli", "Muthe"],
        jawaban: "Eli"
    },

    {
        soal: "Jiko siapakah: Seperti teka-teki, kalian akan selalu penasaran denganku,Aku?",
        pilihan: ["Alya", "Fiony", "Freya", "Oniel"],
        jawaban: "Oniel"
    },

    {
        soal: "Jiko siapakah: Seperti simfoni yang menenangkan hati.?",
        pilihan: ["Muthe", "Christy", "Marsha", "Fiony"],
        jawaban: "Fiony"
    },

    {
        soal: "Jiko siapakah: Terang seperti bulan, bersinar seperti bintang.?",
        pilihan: ["Freya", "Lily", "Lulu", "Gita"],
        jawaban: "Lulu"
    },

    {
        soal: "Jiko siapakah: Never miss a chance to be a star!?",
        pilihan: ["Kathrina", "Alya", "Fiony", "Marsha"],
        jawaban: "Kathrina"
    },

    {
        soal: "Jiko siapakah: Tak banyak bicara, bercerita melalui tulisan.?",
        pilihan: ["Lily", "Lia", "Lulu", "Indah"],
        jawaban: "Indah"
    },

    {
        soal: "Jiko siapakah: Seperti pizza yang selalu dinanti-nantikan semua orang, selalu nantikan aku, ya?",
        pilihan: ["Fiony", "Erine", "Michie", "Marsha"],
        jawaban: "Marsha"
    },

    {
        soal: "Jiko siapakah: Kalau sakura itu kembang, Aku itu kembanggaanmu!",
        pilihan: ["Oline", "Raisha", "Aralie", "Muthe"],
        jawaban: "Raisha"
    },

    {
        soal: "Jiko siapakah: Seperti ombak laut yang tenang, tiba-tiba aku akan menyapumu dengan banyak cinta!",
        pilihan: ["Oniel", "Delynn", "Anindya", "Lyn"],
        jawaban: "Lyn"
    },

    {
        soal: "Jiko siapakah: Ohayo! Konnichiwa! Oyasumi! Aku ingin ada di setiap harimu?",
        pilihan: ["Auwia", "Kimmy", "Fritzy", "Ella"],
        jawaban: "Ella"
    },

    {
        soal: "Jiko siapakah: Si social butterfly yang energik dan periang!",
        pilihan: ["Levi", "Michie", "Lia", "Lily"],
        jawaban: "Lia"
    },

    {
        soal: "Jiko siapakah: Manis seperti gulali, imut seperti kelinci. Cie cie cie,?",
        pilihan: ["Alya", "Anindya", "Greesel", "Gracie"],
        jawaban: "Gracie"
    },

    {
        soal: "Jiko siapakah: Semanis permen kapas dan seindah bunga lavender.?",
        pilihan: ["Elin", "Maxine", "Ribka", "Trisha"],
        jawaban: "Elin"
    },

    {
        soal: "Jiko siapakah: Si mungil hadir semanis mangga?",
        pilihan: ["Freya", "Levi", "Lia", "Anindya"],
        jawaban: "Anindya"
    },

    {
        soal: "Jiko siapakah: Jika hatimu sedang menangis, Aku akan datang sebagai pelangi?",
        pilihan: ["Gita", "Mikaela", "Alya", "Intan"],
        jawaban: "Alya"
    },

    {
        soal: "Jiko siapakah: Pandangan mataku akan menyinari hatimu bagaikan kunang-kunang di malam hari.?",
        pilihan: ["Erine", "Greesel", "Fritzy", "Muthe"],
        jawaban: "Greesel"
    },

    {
        soal: "Jiko siapakah: Always your number one, till infinity and beyond. Hello everyone its?",
        pilihan: ["Marsha", "Nachia", "Gracie", "Michie"],
        jawaban: "Michie"
    },

    {
        soal: "Jiko siapakah: Seperti bunga daisy, aku akan memancarkan kesegaran dan kebahagiaan hay hay aku?",
        pilihan: ["Nala", "Aralie", "Danella", "Daisy"],
        jawaban: "Daisy"
    },

    {
        soal: "Jiko siapakah: Tok-tok! Si penari yang akan menarikmu ke duniaku!",
        pilihan: ["Danella", "Eline", "Kathrina", "Fiony"],
        jawaban: "Danella"
    },

    {
        soal: "Jiko siapakah: Semangatku terus menerus meluap. POP! POP! Aku...yang selalu semangat!",
        pilihan: ["Erine", "Cynthia", "Greesel", "Alya"],
        jawaban: "Cynthia"
    },

    {
        soal: "Jiko siapakah: Hadir dengan seribu kejutan, Checkmate! Siap memenangkan hatimu!",
        pilihan: ["Gita", "Gracie", "Levi", "Erine"],
        jawaban: "Erine"
    },

    {
        soal: "Jiko siapakah: Dengan kekuatan bulan, aku akan menyihirmu dengan pesonaku?",
        pilihan: ["Olla", "Fritzy", "Delynn", "Lana"],
        jawaban: "Lana"
    },

    {
        soal: "Jiko siapakah: Nyemangatin dan ngangenin, siapa yang kamu pikirin? Pyong pyong?",
        pilihan: ["Erine", "Delynn", "Oline", "Lily"],
        jawaban: "Delynn"
    },

    {
        soal: "Jiko siapakah: Seperti bunga yang mekar, aku akan membuat kamu, kamu, dan kamu terbayang-bayang?",
        pilihan: ["Ribka", "Levi", "Aralie", "Daisy"],
        jawaban: "Aralie"
    },

    {
        soal: "Jiko siapakah: Are you ready? Jalani hari ini dengan menari bersamaku. Yuhu, Aku?",
        pilihan: ["Heidi", "Maxine", "Levi", "Alya"],
        jawaban: "Levi"
    },

    {
        soal: "Jiko siapakah: Pelukis yang hadir di mimpi-mimpi indahmu. One, two, three...sha!",
        pilihan: ["Lana", "Nala", "Lia", "Trisha"],
        jawaban: "Trisha"
    },

    {
        soal: "Jiko siapakah: Papipapipum! Aku akan mengejutkanmu dengan kehebatanku.?",
        pilihan: ["Virgi", "Lily", "Freya", "Marsha"],
        jawaban: "Lily"
    },

    {
        soal: "Jiko siapakah: Abracadabra! Si pesulap yang siap membuat hatimu terpikat. It's me?",
        pilihan: ["Danella", "Carissa", "Lana", "Fritzy"],
        jawaban: "Fritzy"
    },

    {
        soal: "Jiko siapakah: Mirror mirror on the wall, who's the sweetest in here? It's me?",
        pilihan: ["Oline", "Ribka", "Indah", "Oniel"],
        jawaban: "Ribka"
    },

    {
        soal: "Jiko siapakah: Semangat ku full terus! Gas, gas, gas-?",
        pilihan: ["Ekin", "Oline", "Erine", "Maira"],
        jawaban: "Oline"
    },

    {
        soal: "Jiko siapakah: Si panda unyu yang selalu ceria! Aku ..., bikin kamu bahagia!?",
        pilihan: ["Gracie", "Oline", "Nachia", "Lily"],
        jawaban: "Nachia"
    },

    {
        soal: "Jiko siapakah: Moshi moshi, welcome Naylalaland! Halo semuanya, bakkyun!",
        pilihan: ["Alya", "Nala", "Greesel", "Nayla"],
        jawaban: "Nayla"
    },

    {
        soal: "Jiko siapakah: Suka berekspresi melalui kreasi! Taraaaa,Aku?",
        pilihan: ["Virgi", "Intan", "Ella", "Giaa"],
        jawaban: "Virgi"
    },

    {
        soal: "Jiko siapakah: Sesejuk dan sedingin mint, perkenalkan aku?",
        pilihan: ["Freya", "Ekin", "Gita", "Lyn"],
        jawaban: "Ekin"
    },

    {
        soal: "Jiko siapakah: Cii..luu..baaa..! Merpati yang siap membawa kejutan di setiap penampilan ku?",
        pilihan: ["Intan", "Jemima", "Ekin", "Rara"],
        jawaban: "Jemima"
    },

    {
        soal: "Jiko siapakah: Baby hamster yang lincah, aku akan berlari-lari di pikiranmu! Haloha, katakan?",
        pilihan: ["Levi", "Lyn", "Ella", "Kimmy"],
        jawaban: "Kimmy"
    },

    {
        soal: "Jiko siapakah: Roar! Si singa pemberani yang siap menyemangati harimu.?",
        pilihan: ["Fiony", "Marsha", "Michie", "Nala"],
        jawaban: "Nala"
    },

    {
        soal: "Jiko siapakah: Serigala tangguh dibawah sinar purnama, panggil aku auuuu-?",
        pilihan: ["Auwia", "Intan", "Jemima", "Mikaela"],
        jawaban: "Auwia"
    },

    {
        soal: "Jiko siapakah: Intan Permata yang berkilau temukan cahayaku dihatimu, aku?",
        pilihan: ["Lia", "Auwia", "Intan", "Lyn"],
        jawaban: "Intan"
    },

    {
        soal: "jiko siapakah: Bagai harmoni indah yang berirama di benakmu?",
        pilihan: ["Rilly", "Ekin", "Fritzy", "Freya"],
        jawaban: "Rilly"
    },

    {
        soal: "Jiko siapakah: Penceria yang membuatmu tertawa dengan tingkahku!",
        pilihan: ["Gita", "Oniel", "Maira", "Levi"],
        jawaban: "Maira"
    },

    {
        soal: "Jiko siapakah: Camera, Roll, Action! Sutradara yang mewarnai kisah hidupmh dengan penuh warn",
        pilihan: ["Levi", "Aralie", "Mikaela", "Fiony"],
        jawaban: "Mikaela"
    },

    {
        soal: "Jiko siapakah: Dengan semangat dengan kerja kerasku aku akan kalian bahaa-?",
        pilihan: ["Muthe", "Olla", "Christy", "Giaa"],
        jawaban: "Giaa"
    }

];


// ==========================================
// VARIABEL GAME
// ==========================================

let soalGame = [];
let nomorSekarang = 0;
let jumlahSoalDipilih = 0;
let benar = 0;
let salah = 0;
let sudahMenjawab = false;


// ==========================================
// ACAK ARRAY
// ==========================================

function acakArray(array) {

    let hasil = [...array];

    for (let i = hasil.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
    }

    return hasil;
}


// ==========================================
// MULAI GAME
// ==========================================

function mulaiGame(jumlah) {

    jumlahSoalDipilih = jumlah;

    nomorSekarang = 0;
    benar = 0;
    salah = 0;
    sudahMenjawab = false;

    // Acak 50 soal
    const soalAcak = acakArray(daftarSoal);

    // Ambil sesuai pilihan pemain
    soalGame = soalAcak.slice(0, jumlah);

    document.getElementById("menuAwal").style.display = "none";
    document.getElementById("hasilAkhir").style.display = "none";
    document.getElementById("areaSoal").style.display = "block";

    tampilkanSoal();
}


// ==========================================
// TAMPILKAN SOAL
// ==========================================

function tampilkanSoal() {

    sudahMenjawab = false;

    const soal = soalGame[nomorSekarang];

    document.getElementById("nomorSoal").innerText =
        "Soal " + (nomorSekarang + 1) + " dari " + jumlahSoalDipilih;

    document.getElementById("pertanyaan").innerText =
        soal.soal;

    const pilihanDiv = document.getElementById("pilihan");

    pilihanDiv.innerHTML = "";

    document.getElementById("hasilJawaban").innerHTML = "";

    document.getElementById("tombolLanjut").style.display = "none";


    // Acak pilihan jawaban
    const pilihanAcak = acakArray(soal.pilihan);

    pilihanAcak.forEach(function(pilihan) {

        const tombol = document.createElement("button");

        tombol.className = "pilihan";

        tombol.innerText = pilihan;

        tombol.onclick = function() {
            cekJawaban(pilihan, tombol);
        };

        pilihanDiv.appendChild(tombol);

    });
}


// ==========================================
// CEK JAWABAN
// ==========================================

function cekJawaban(jawaban, tombolDipilih) {

    if (sudahMenjawab) {
        return;
    }

    sudahMenjawab = true;

    const soal = soalGame[nomorSekarang];

    const semuaTombol =
        document.querySelectorAll(".pilihan");

    semuaTombol.forEach(function(tombol) {
        tombol.disabled = true;
    });


    if (jawaban === soal.jawaban) {

        benar++;

        tombolDipilih.classList.add("benar");

        document.getElementById("hasilJawaban").innerHTML =
            "<div class='jawaban-benar'>" +
            "✅ Jawaban kamu benar!" +
            "</div>";

    } else {

        salah++;

        tombolDipilih.classList.add("salah");

        document.getElementById("hasilJawaban").innerHTML =
            "<div class='jawaban-salah'>" +
            "❌ Jawaban kamu salah!" +
            "<br><br>" +
            "✅ Jawaban yang benar: <strong>" +
            soal.jawaban +
            "</strong>" +
            "</div>";


        // Tandai jawaban benar
        semuaTombol.forEach(function(tombol) {

            if (tombol.innerText === soal.jawaban) {

                tombol.classList.add("benar");

            }

        });

    }

    document.getElementById("tombolLanjut").style.display =
        "block";
}


// ==========================================
// SOAL BERIKUTNYA
// ==========================================

function soalBerikutnya() {

    nomorSekarang++;

    if (nomorSekarang >= jumlahSoalDipilih) {

        tampilkanHasil();

    } else {

        tampilkanSoal();

    }
}


// ==========================================
// HASIL AKHIR
// ==========================================

function tampilkanHasil() {

    document.getElementById("areaSoal").style.display =
        "none";

    document.getElementById("hasilAkhir").style.display =
        "block";


    const nilai =
        Math.round((benar / jumlahSoalDipilih) * 100);


    document.getElementById("totalSoal").innerText =
        jumlahSoalDipilih;

    document.getElementById("jumlahBenar").innerText =
        benar;

    document.getElementById("jumlahSalah").innerText =
        salah;

    document.getElementById("nilaiAkhir").innerText =
        nilai + "/100";
}


// ==========================================
// MAIN LAGI
// ==========================================

function mainLagi() {

    document.getElementById("hasilAkhir").style.display =
        "none";

    document.getElementById("menuAwal").style.display =
        "block";

}


// ==========================================
// KEMBALI KE MENU GAME
// ==========================================

function kembaliKeGame() {

    // Ganti bagian ini sesuai nama file
    // halaman menu game kamu.

    window.location.href = "game.html";
}

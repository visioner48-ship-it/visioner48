// ==========================================
// FIREBASE CONFIG
// ==========================================

const firebaseConfig = {

    apiKey: "",

    authDomain:
        "visioner48-9b51e.firebaseapp.com",

    databaseURL:
        "https://visioner48-9b51e-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId:
        "visioner48-9b51e",

    storageBucket:
        "visioner48-9b51e.appspot.com",

    messagingSenderId: "",

    appId: ""

};


// ==========================================
// FIREBASE INIT
// ==========================================

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


// ==========================================
// KIRIM PERTANYAAN
// ==========================================

function kirimPertanyaan() {

    const nama =
        document.getElementById("nama").value.trim();

    const pertanyaan =
        document.getElementById("pertanyaan").value.trim();

    const status =
        document.getElementById("status");

    const tombol =
        document.getElementById("kirimBtn");


    // VALIDASI NAMA

    if (nama === "") {

        status.style.color = "#ff5555";

        status.innerText =
            "Nama belum diisi.";

        return;
    }


    // VALIDASI PERTANYAAN

    if (pertanyaan === "") {

        status.style.color = "#ff5555";

        status.innerText =
            "Pertanyaan belum diisi.";

        return;
    }


    if (pertanyaan.length < 3) {

        status.style.color = "#ff5555";

        status.innerText =
            "Pertanyaan terlalu pendek.";

        return;
    }


    // MATIKAN BUTTON

    tombol.disabled = true;

    tombol.innerText =
        "MENGIRIM...";


    // DATA

    const dataPertanyaan = {

        nama: nama,

        pertanyaan: pertanyaan,

        waktu: Date.now()

    };


    // SIMPAN KE FIREBASE

    database
        .ref("visioner48_questions")
        .push(dataPertanyaan)

        .then(function () {

            status.style.color =
                "#00ff88";

            status.innerText =
                "✓ Pertanyaan berhasil dikirim!";


            document.getElementById("nama")
                .value = "";

            document.getElementById("pertanyaan")
                .value = "";


            tombol.disabled = false;

            tombol.innerText =
                "KIRIM PERTANYAAN";

        })

        .catch(function (error) {

            console.error(error);

            status.style.color =
                "#ff4444";

            status.innerText =
                "Gagal mengirim pertanyaan.";

            tombol.disabled = false;

            tombol.innerText =
                "KIRIM PERTANYAAN";

        });

}


// ==========================================
// KEMBALI HOME
// ==========================================

function kembaliHome() {

    window.location.href =
        "index.html";

}
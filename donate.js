javascript
let nominal = 0;
let metode = "QRIS";


// FORMAT RUPIAH
function rupiah(angka) {
    return "Rp" + Number(angka).toLocaleString("id-ID");
}


// PILIH NOMINAL
function pilihNominal(jumlah, tombol) {

    nominal = jumlah;

    document.getElementById("nominalLain").value = "";

    document.querySelectorAll(".nominal button").forEach(function(btn) {
        btn.classList.remove("aktif");
    });

    tombol.classList.add("aktif");

    updateTotal();
}


// NOMINAL MANUAL
function nominalManual() {

    nominal = Number(
        document.getElementById("nominalLain").value
    ) || 0;

    document.querySelectorAll(".nominal button").forEach(function(btn) {
        btn.classList.remove("aktif");
    });

    updateTotal();
}


// UPDATE TOTAL
function updateTotal() {

    document.getElementById("jumlah").textContent =
        rupiah(nominal);

    document.getElementById("total").textContent =
        rupiah(nominal);

    document.getElementById("qrisNominal").textContent =
        rupiah(nominal);
}


// PILIH PEMBAYARAN
function pilihPembayaran(button, namaMetode) {

    metode = namaMetode;

    document.querySelectorAll(".payment-btn").forEach(function(btn) {
        btn.classList.remove("aktif");
    });

    button.classList.add("aktif");
}


// PILIH GIF
function pilihGIF(button) {

    document.querySelectorAll(".media").forEach(function(btn) {
        btn.classList.remove("aktif");
    });

    button.classList.add("aktif");

    alert("GIF dipilih.");
}


// BAYAR
function bayar() {

    const nama =
        document.getElementById("nama").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const pesan =
        document.getElementById("pesan").value.trim();


    if (nominal < 1000) {

        alert("Pilih nominal donasi terlebih dahulu.");

        return;
    }


    if (nama === "") {

        alert("Silakan isi nama terlebih dahulu.");

        return;
    }


    if (email === "") {

        alert("Silakan isi email terlebih dahulu.");

        return;
    }


    if (pesan === "") {

        alert("Silakan isi pesan terlebih dahulu.");

        return;
    }


    // Untuk sementara QRIS
    if (metode === "QRIS") {

        const qris =
            document.getElementById("qrisBox");

        qris.classList.add("show");

        qris.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }


    alert(
        "Metode " +
        metode +
        " belum diaktifkan."
    );
}


// JALANKAN SAAT HALAMAN SELESAI
document.addEventListener("DOMContentLoaded", function() {

    updateTotal();

    // NOMINAL
    document.querySelectorAll(".nominal button")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                const jumlah =
                    Number(button.dataset.amount);

                pilihNominal(jumlah, button);

            });

        });


    // NOMINAL MANUAL
    const inputNominal =
        document.getElementById("nominalLain");

    if (inputNominal) {

        inputNominal.addEventListener("input", function() {
            nominalManual();
        });

    }


    // METODE PEMBAYARAN
    document.querySelectorAll(".payment-btn")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                pilihPembayaran(
                    button,
                    button.dataset.method
                );

            });

        });


    // GIF
    document.querySelectorAll(".media")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                pilihGIF(button);

            });

        });

});
function tampilkanWaktu() {
    const elemenWaktu = document.getElementById("waktu");

    if (elemenWaktu) {
        const sekarang = new Date();
        elemenWaktu.innerHTML =
            "Jam & Tanggal: " + sekarang.toLocaleString();
    }
}

setInterval(tampilkanWaktu, 1000);

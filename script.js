function kirimData() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;

    var peminatanRadio = document.querySelector('input[name="peminatan"]:checked');
    var peminatan = peminatanRadio ? peminatanRadio.value : "Belum memilih";

    // Ambil nilai select dropdown angkatan
    var angkatanSelect = document.getElementById("angkatan");
    var angkatanText = angkatanSelect.options[angkatanSelect.selectedIndex].text;

    var tanggal = document.getElementById("tanggal").value;

    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama : " + nama +
        "\nNIM : " + nim +
        "\nPeminatan : " + peminatan +
        "\nAngkatan : " + (angkatanText !== "-- Pilih Angkatan --" ? angkatanText : "Belum memilih angkatan") +
        "\nTanggal : " + (tanggal ? tanggal : "Belum memilih tanggal") +
        "\nAlamat : " + alamat
    );

    document.getElementById('hasilNama').innerText = "Nama: " + nama;
    document.getElementById('hasilNim').innerText = "NIM: " + nim;
    document.getElementById('hasilPeminatan').innerText = "Peminatan: " + peminatan;
    document.getElementById('hasilSemester').innerText = "Angkatan: " + (angkatanText !== "-- Pilih Angkatan --" ? angkatanText : "Belum memilih angkatan");
    document.getElementById('hasilTanggal').innerText = "Tanggal Pendaftaran: " + (tanggal ? tanggal : "Belum memilih tanggal");
    document.getElementById('hasilAlamat').innerText = "Alamat: " + alamat;
}

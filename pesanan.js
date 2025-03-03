// Mendapatkan parameter produk dari URL
const urlParams = new URLSearchParams(window.location.search);
const produk = urlParams.get('produk');

// Mengisi field produk dengan nama produk
document.getElementById('produk').value = produk;

// Mengirim data pemesanan
document.getElementById('form-pemesanan').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const telepon = document.getElementById('telepon').value;
    const jumlah = document.getElementById('jumlah').value;

    // Lakukan sesuatu dengan data pemesanan, misalnya mengirim ke server
    alert(`Pesanan atas nama ${nama} (${jumlah} ${produk}) telah dikonfirmasi!`);
});
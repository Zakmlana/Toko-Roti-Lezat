const tombolBeli = document.querySelectorAll('.beli-btn');

tombolBeli.forEach(tombol => {
    tombol.addEventListener('click', () => {
        alert('Produk ditambahkan ke keranjang!');
    });
});
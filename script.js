let totalHarga = 0;

function tambahKeKeranjang(namaProduk, harga) {
    const daftarKeranjang = document.getElementById('daftar-keranjang');
    const listItem = document.createElement('li');
    listItem.textContent = `${namaProduk} - Rp ${harga}`;
    daftarKeranjang.appendChild(listItem);
    
    totalHarga += harga;
    document.getElementById('total-harga').textContent = totalHarga;
}

function prosesPembayaran() {
    if (totalHarga > 0) {
        alert(`Pembayaran berhasil! Total: Rp ${totalHarga}`);
        totalHarga = 0;
        document.getElementById('daftar-keranjang').innerHTML = '';
        document.getElementById('total-harga').textContent = totalHarga;
    } else {
        alert('Keranjang belanja kosong!');
    }
}

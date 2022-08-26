import React from 'react'

const makanans = [
    {
        nama: 'soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mi ayam',
        harga: 7000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    },
]

//Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga;
},0);

const Map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2>
    <ul>
        {makanans.map((makanan, index) => (
            <li>{index+1}{makanan.nama} - Harga {makanan.harga}</li>
        ))}
    </ul>
    <h2>Map filter harga yang lebih dari 11.000</h2>
    <ul>
        {makanans.filter((makanan) => makanan.harga > 11.000)
        .map((makanan, index) => (
            <li>{index+1}{makanan.nama} - Harga {makanan.harga}</li>
        ))}
    </ul>
    <h5>total_harga: {total_bayar}</h5>
    </div>
  );
};
export default Map;
// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// let restoMonica = new Set('Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi');
setColorMonica = new Set();
setColorMonica.add('Yellow');
setColorMonica.add('Pink');
setColorMonica.add('White');
setColorMonica.add('Purple');

setRestoMonica = new Set ();
setRestoMonica.add ('Bento');
setRestoMonica.add ('Sushi');
setRestoMonica.add ('Pancake');
setRestoMonica.add ('Eggy');
setRestoMonica.add ('Tempura');
setRestoMonica.add ('Bento');
setRestoMonica.add ('Eggy');
setRestoMonica.add ('Padang');
setRestoMonica.add ('Tteok');
setRestoMonica.add ('Sushi');
setRestoMonica.add ('Sushi');


const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email:'monica@dingdong.com',
    favoriteColor: setColorMonica,
    isHavePet: 'Yes',
    education: [{name: 'SD 01', city: 'Jakarta', graduate: 2016}, 
       {name: 'SMP 02', city: 'Jakarta', graduate: 2019},
       {name: 'SMA 03', city: 'Tangerang'}],
    favoriteRestaurant: setRestoMonica
};

setColorWendy = new Set();
setColorWendy.add ('Blue');
setColorWendy.add ('Black');
setColorWendy.add ('Grey');

setRestoWendy = new Set ();
setRestoWendy.add ('Tempura');
setRestoWendy.add ('Bento');
setRestoWendy.add ('Sushi');
setRestoWendy.add ('Pancake');
setRestoWendy.add ('Padang');
setRestoWendy.add ('Katsu');
setRestoWendy.add ('Geprek');
setRestoWendy.add ('Pancake');
setRestoWendy.add ('Eggy');

const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: setColorWendy,
    education: [{name: 'SD 02', city: 'Jakarta', graduate: 2010}, 
    {name: 'SMP 03', city: 'Bogor', graduate: 2013},
    {name: 'SMA 01', city: 'Surabaya', graduate: 2016}, 
    {name: 'Universitas Maju', city:'Tangerang'}],
    isHavePet: 'No',
    favoriteRestaurant: setRestoWendy
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
// 04) Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
const souvenirWeight = 75;
const trinketWeight = 112;
let souvenirNum = Number (prompt("Please insert how many SOUVENIRS did tou get?", 999.99));
let trinketNum = Number (prompt("Please insert how many TRINKETS did tou get?", 999.99));
const sumWeight = ((souvenirWeight *souvenirNum) + (trinketWeight * trinketNum)) / 1000;

document.write(`Total weight is: ${sumWeight} kg <br>`);
console.log(`Total weight is: ${sumWeight} kg`);
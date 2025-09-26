//* Bir dizi içindeki sayıların karesini al ve yeni bir dizi oluştur.

const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((x) => x * x);
console.log(newArray);

//map() bir dizinin her elemanını alır, üzerinde işlem yapar ve yeni bir dizi oluşturur.
// Önemli: Orijinal dizi değişmez.
// Her eleman için bir dönüş değeri üretir ve yeni diziye koyar.

//! söz dizimi:
// const newArray = array.map((element, index, array) => {
//     //* element: üzerinde işlem yapılacak dizi elemanı
//     //* index: elemanın dizideki konumu (isteğe bağlı)
//     //* array: orijinal dizi (isteğe bağlı)
//     return element * 2; // her eleman üzerinde işlem
// });

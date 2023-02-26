// // Level 1
// // У вас есть список из n элементов, которые представляют 
// // собой оценки студентов по математике. Вам нужно 
// // отсортировать этот список в порядке убывания оценок с 
// // использованием алгоритма сортировки Merge sort.
// // Для решения этой задачи напишите функцию, которая 
// // принимает на вход список оценок и возвращает новый 
// // список, отсортированный в порядке убывания.
// // { 3, 8, 1, 9, 4, 2, 7, 6, 5 };

// let arr=[3, 8, 1, 9, 4, 2, 7, 6, 5 ]
// function mergeSort(arr) {
//     if (arr.length === 1) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, mid);
//     let rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//  }
//  function merge(leftArr, rightArr) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         if (leftArr[leftIndex] > rightArr[rightIndex]) {
//             result.push(leftArr[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(rightArr[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
//  }
//  console.log(mergeSort(arr));





// // Level 2
// // Дан массив объектов типа Person, который содержит поля 
// // name (тип String) и age (тип int). Необходимо отсортировать 
// // этот массив по возрасту в порядке убывания, используя 
// // алгоритм Merge sort.

//  let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 35 },
//     { name: "Eve", age: 28 },
// ];

// function mergeSort(arr) {
//     if (arr.length === 1) { 
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, mid);
//     let rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//  }
//  function merge(leftArr, rightArr) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         if (leftArr[leftIndex].age > rightArr[rightIndex].age) {
//             result.push(leftArr[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(rightArr[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
//  }
//  console.log(mergeSort(people));
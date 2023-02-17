// //   task -1
// // Дано натуральное число N. Выведите слово YES, 
// // если число N является точной степенью двойки, 
// // или слово NO в противном случае.
// // Операцией возведения в степень пользоваться нельзя!

// let n = 36; 
// const myNum = 2;
// for (let i = 0; i<100; i++) { 
//     if ( n==1) { 
//     console.log('yes'); 
//     break;
//     } else if(n%myNum!==0){ 
//     console.log('no');
//     break;
//     } else{ n=n/myNum} 
// }




// //  task -2
// // Дано натуральное число N. Вычислите сумму его цифр.
// // При решении этой задачи нельзя использовать строки, 
// // списки, массивы (ну и циклы, разумеется).

// let n = 179; 
// let unit = n%10;
// let t = (n - n % 10) / 10;
// let decade = t%10
// let hundred = (t-t%10)/10;
// console.log(unit+decade+hundred);




// // task -3
// // 2.1 Напишите рекурсивный метод, 
// // который выводит на экран числа Фибоначчи до N-ого элемента.

// function fibon(n) { debugger
//     let firstNum=0; debugger
//     let secNum=1; debugger
//     let sum=1; debugger
//     for (let i = 0; i <= n; i++) {
//         if (sum>n) {
//             return console.log('end.');
//         } else {
//             console.log(sum); debugger
//             firstNum=secNum; debugger
//             secNum= sum; debugger
//             sum= firstNum+secNum; debugger  
//         }
//     }
//    }
//    fibon(5);



// // function fibon(n) {                 //-Почему у меня так не получается?
// //     if (n <= 0) {
// //         return n
// //     } else {
// //         console.log(n);
// //         return fibon(n - 1) + fibon(n - 2);
// //     }
// //   }
// //   console.log( fibon(4) ); 




// // task -4                                                   //вообще не понял где здесь рекурсия(
// // 2.2 Напишите рекурсивный метод, который проверяет, 
// // является ли строка палиндромом.

// let polindrom= "арозаупаланалапуазора";
// // let polindrom = prompt("Введите слово")
// function searchPolindrom(polindrom) {
//     let polindrom2="";
//     for (let i = polindrom.length-1; i>=0 ; i--) {
//             polindrom2+=polindrom[i]; 
//         }
//         return (polindrom2 === polindrom)?alert(true):alert(false)
// }
// searchPolindrom(polindrom)


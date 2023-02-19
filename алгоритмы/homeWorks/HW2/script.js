// //   task -1
// // Дано натуральное число N. Выведите слово YES, 
// // если число N является точной степенью двойки, 
// // или слово NO в противном случае.
// // Операцией возведения в степень пользоваться нельзя!
// const myNum = 3; 
// function square(n) { 
//     if ( n===1) { 
//         return 'yes' ; 
//     } else if(n<1){ 
//         return 'no'; 
//     }  
//     return square(n/myNum);   
// }
// console.log(square(1)); 


// //  task -2
// // Дано натуральное число N. Вычислите сумму его цифр.
// // При решении этой задачи нельзя использовать строки, 
// // списки, массивы (ну и циклы, разумеется).
// function sumOfVal(myNum) {
//     if (myNum<10) {
//         return myNum
//     }
//     return myNum%10 + sumOfVal((myNum-(myNum%10))/10)
// }
// console.log(sumOfVal(1111111));


// // task -3
// // 2.1 Напишите рекурсивный метод, 
// // который выводит на экран числа Фибоначчи до N-ого элемента.
// let firstNum=0; 
// let secNum=1; 
// let sum=0;          

// function fibon(n) {  
//     if (sum> n) { 
//         return 'end'; 
//     } else if(sum==n){
//         return `${sum} end`; 
//     }
//     else {
//         firstNum=secNum; 
//         secNum= sum; 
//         sum= firstNum+secNum; 
//         console.log(secNum);    
//         return fibon(n);   
//     }
//   }
//   console.log(fibon(55));


// // task -4                                                  
// // 2.2 Напишите рекурсивный метод, который проверяет, 
// // является ли строка палиндромом.

// let polindrom= 'арозаупаланалапуазора';
// let index =0; 
// let lastInd=polindrom.length-1; 
// function searchPolindrom(polindrom){
//   if (index>=lastInd) { 
//     return console.log('полиндром'); 
//   }else if (polindrom[index]!==polindrom[lastInd]) { 
//     return console.log('не полиндром'); 
//   }else{
//     index++;
//     lastInd--; 
//     return searchPolindrom(polindrom) 
//   }
// }
// console.log(searchPolindrom(polindrom)); 






/*Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом,
 например:
ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке
P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase()
 и charAt(). 
*/

// var name = prompt('Enter name: ');
// function ucFirst(name) {
// 	name = name.charAt(0).toUpperCase() + name.substring(1);
// 	return name;
// }
// document.write('Result: ' + ucFirst(name));
// document.write('<br />' + '<hr />' + '<br />');



/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

// var a = +prompt('Enter first number: ');
// var b = +prompt('Enter second number: ');
// function min(a, b) {
// 	if (a < b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// document.write('Min number is: ' + min(a, b));
// document.write('<br />' + '<hr />' + '<br />');




/* Повторять цикл, пока ввод неверен
Напишите функцию в которой цикл предлагает prompt ввести число, большее заданного 
аргумента функции (например 100). Если посетитель ввёл другое число – попросить ввести 
ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не 
нажмёт кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа. Предусмотреть обработку нечисловых строк 
в этой задаче */

var number = 100;
function getNumber(number) {
	do {
	var userNumber = prompt('Enter number: ');
	if (userNumber == null) break;
	userNumber = +userNumber;
	} while (number >= userNumber || isNaN(userNumber));
	return userNumber;
} 
// if (getNumber(number) != null) {
document.write('Entered number is: ' + getNumber(number));
document.write('<br />' + '<hr />' + '<br />');
// }




/*Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.*/

var  firstNumber = +prompt('Enter first number ');
var  secondNumber = +prompt('Enter second number ');

if (firstNumber < secondNumber) {
	min = firstNumber;
	max = secondNumber;
} else {
	min = secondNumber;
	max = firstNumber;
}

function getPrimeNumbers(min, max) {
	nextPrime:
  for (var i = min; i <= max; i++) {
  	if (i <= 1) continue nextPrime;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    document.write( i + ' ' );
  }
}
document.write('Prime numbers from ' + min + ' to ' + max + ' : ');
getPrimeNumbers(min, max);
document.write('<br />' + '<hr />' + '<br />');
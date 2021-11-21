var number = prompt ('введите число 1 или 2:'); // условие
switch (number) {
	case '1':
		document.write('Один'); // вывод значения исходя из условия
	break;

	case '2':
		document.write('Два'); // вывод значения исходя из условия
	break;
	
default: // вывод значения исходя из условия
	document.write('Вы ввели не то значение');
}
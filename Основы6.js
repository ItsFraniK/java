var value = '5'; // присвоение значения переменной
	switch (value){ // исходя из значения переменной выводится одно из 3 слов 
		case '1': 
		case '2':
		case '3':
		document.write('hello');
		break;
		case '4':
		case '5':
		document.write('world');
		break;
		default:
		document.write('error');
	}
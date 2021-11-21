var a = prompt ("Введите число ворон на ветке"); // присвоение значения переменной
	switch (a){ // исходя из значения переменной выводится одно из 4 выражений
	case "1":
	document.write("На ветке сидит 1 ворона")
	break;
	case "2":
	case "3":
	case "4":
	document.write("На ветке сидит "," ",a," ", " вороны")
	break;
	case "5":
	case "6":
	case "7":
	case "8":
	case "9":
	case "10":
	document.write("На ветке сидит "," ",a," ", "ворон")
	break;
	default:
	document.write("Error")
}
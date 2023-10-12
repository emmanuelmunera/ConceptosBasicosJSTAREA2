
let sueldoBase = 0; 
let nombreApellido; 
let horasTrabajadas= 0 ; 
let valorHora= 0 ;

nombreApellido = prompt("Ingresa tu nombre con apellido");
horasTrabajadas = Number(prompt("Ingrese las horas trabajadas"));
valorHora = Number(prompt("Ingrese las horas trabajadas"));

 sueldoBase = horasTrabajadas * valorHora 

 alert(`el sueldo de por estas horas es de ${sueldoBase}`);

console.log("Nombre del empleado: " + nombreApellido);
console.log("Horas trabjadas: " + horasTrabajadas);
console.log("Valor de hora: $" + valorHora);
console.log("Sueldo total:  $" + sueldoBase);




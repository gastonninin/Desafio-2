var ingresante = {
    age: '',
    genero: '',
    
}
ingresante.age = prompt('Ingresa tu edad');
ingresante.genero = prompt('Ingresa tu género');
if (ingresante.age < 18){
if (ingresante.genero === 'masculino') {
	alert('Sr. usted es menor de edad no puede ingresar.');
} else if (ingresante.genero === 'femenino') {
	alert('Sra. usted es menor de edad no puede ingresar.');
} else if (ingresante.genero === 'trans')
	alert('Sx. usted es menor de edad no puede ingresar.');
} if (ingresante.age >= 18){
if (ingresante.genero === 'masculino') {
	alert('Sr. usted es mayor de edad puede ingresar.');
} else if (ingresante.genero === 'femenino') {
	alert('Sra. usted es mayor de edad puede ingresar.');
} else if (ingresante.genero === 'trans')
	alert('Sx. usted es mayor de edad puede ingresar.');
} 

function validar (){
var numb= document.getElementById("entero").value;
var b;
// esta variable es la que permite ir jugando con el switch
var numero= parseInt(numb);
var divisores= [];

    if (isNaN(numb)) {
        b=1
    }
    if (numero<0) {
        b=2
    }
    if (numero<numb) {
        b=3
    }
    if (numero>1000000000){
        b=4
    }
    
  switch (b) {
      case 1: alert ("Te dije número, no cualquier cosa xD");
      break;
      case 2: alert (" Los números naturales son mayores a cero. ¿no sabías?");
      break;
      case 3: alert ("¿Es que no fuiste a la escuela?");
      break;
      case 4: alert ("dije menor a 10 cifras, ¿por que semejante provocación de tu parte?");
      break;
      default: 
        for (i=1; i<numero+1;i++) {
           if (numero%i==0){
               divisores.push(i);
           }
        }
    if (divisores.length==2) {
            text= numero + " es un número primo"
    }

    else {
            text= numero + " no es un número primo"
        }
        document.getElementById("demo").innerHTML = text;
}
}
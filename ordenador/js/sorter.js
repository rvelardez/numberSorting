/*
Funcion sortNumber : Ordena en forma ascendente los valores del campo con id=txt1 y valida que solo contenga numeros enteros
*/
function sortNumber() {
   var captureNumb = document.getElementById('txt1');
   if (captureNumb.value.match(/[^\s\d]/)) {
      alert("Ingrese solo números enteros separados por espacio.");
      return;
   }
   var numbers = captureNumb.value.split(" ");
   numbers = numbers.unicos();

   captureNumb.value = numbers.sort(function(a, b) {
      return a - b
   }).join(" ");

}
/*
Funcion unicos : Disponible para arreglos, elimina los elementos duplicados.
*/
Array.prototype.unicos = function() {
   var n = {},
      r = [];
   for (var i = 0; i < this.length; i++) {
      if (!n[this[i]]) {
         n[this[i]] = true;
         r.push(this[i]);
      }
   }
   return r;
}

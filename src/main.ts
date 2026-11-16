// 0 Significa que el asiento está libre y 1 ocupado
const libre = 0;
const ocupado = 1;

// Crea la sala con el número de filas y columnas indicado
function inicializarSala(filas: number, columnas: number): number[][] {
   const sala: number [] [] = [];
   for (let f = 0; f < filas; f++) {
      const fila: number [] = [];
      for (let c = 0; c < columnas; c++) {
         fila.push(libre);
      } // cierra el for de asientos
      sala.push(fila);
   } // cierra el for de filas
   return sala;
} // cierra la función

// Muestra la sala con L, X y con el número de cada fila y columna
function mostrarSala(sala: number [] []): void {
   let cabecera = "  ";
   for (let ca = 0; ca < sala[0].length; ca++) {
      cabecera += `${ca} `
   }
   console.log(cabecera)

   for (let f = 0; f < sala.length; f++) {
      let linea = `${f} ` ; // empieza con el número de fila
      for (const asiento of sala [f]) {
         if (asiento === ocupado) {
            linea += "X ";
         } else {
            linea += "L ";
         }
      }
      console.log(linea);
   }
}
// Reservar asiento y marcarlo como ocupado
function reservarAsiento(sala: number [] [], fila: number, columna: number): string {
   if (fila < 0 || fila >= sala.length) {
      return `La fila no es correcta`
   }  else if (columna < 0 || columna >= sala[0].length) {
      return `La columna no es correcta`
   }  else if (sala [fila] [columna] === ocupado) {
      return `Seleccione un asiento libre`
   }  else {
      sala [fila] [columna] = ocupado;
      return `Reserva efectuada con exito` 
   }
}
const sala = inicializarSala(8, 10);
console.log(reservarAsiento(sala, 5, 2));
console.log(reservarAsiento(sala, 5, 2));
console.log(reservarAsiento(sala, 12, 5));
console.log(reservarAsiento(sala, 2, 15));
mostrarSala(sala);


// Cuenta los asientos libres y ocupados de la sala
function contarAsientos(sala:number [][]): string {
   let libres = 0;
   let ocupados = 0;
   for (let f = 0; f < sala.length; f++) {
      for (const asiento of sala [f]) {
         if (asiento === ocupado) {
            ocupados += 1;
         } else {
            libres += 1;
         }
      }
   }  
   return `Asientos ocupados ${ocupados} y asientos libres ${libres}` 
}

console.log(contarAsientos(sala));
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

// Muestra la sala con L, X y con el número de cada fila
function mostrarSala(sala: number [] []): void {
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
const sala = inicializarSala(8, 10);
sala [5] [2] = ocupado;
mostrarSala(sala);
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

const sala = inicializarSala(8, 10);
console.log(sala);

import { leerSuperheroes, agregarSuperheroes } from './utils-final.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

agregarSuperheroes(archivoOriginal, archivoNuevos);

const superheroes = leerSuperheroes('./superheroes.txt');

console.log('Superheroes ordenados');
console.log(superheroes);
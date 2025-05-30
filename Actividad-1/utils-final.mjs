import fs from 'fs';

class Superheroe {
    constructor (id, nomreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = this.nombreSuperheroe;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);
    
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nomreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes; 
}

export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    const intanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nomreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    const listaActual = [...superheroesOriginales, ...intanciasNuevos];

    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2, 'uft8'));
    console.log('Lista de superheroes actualizadad con exito');
    
}
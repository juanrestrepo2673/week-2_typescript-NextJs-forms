let MAX_PARAMETER_A: number = 5.3;
let texto: string = 'mi text';
let isValid: boolean = true;

function isValidForm(topic: string, statistis: number): boolean {
    return true;
}

interface Module {
    statistis: number,
    topic: string,
    date?: string,
}

let newModule: Module = {
    statistis: 4,
    topic: '234'
}

// Crear una interface Persona que tenga name, age, city, location, y location
// debe ser un objeto que tenga latitud y longitud


interface Ubicacion {
    lat: number;
    lon: number;
}

interface Person {
    name: string;
    age: number;
    city: 'Medellin' | 'Bogota' | 'Cali';
    ubicacion: {
        lat: number,
        lon: number
    }
}

const newPerson: Person = {
     name: 'juan',
    age: 10,
    city: 'Bogota',
    ubicacion: {
        lat: 3,
        lon: 3
    }
}
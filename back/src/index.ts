// PARAMETROS DE FUNCIONES, Y RETORNAR UN TIPO DE DATO

function suma (a: number, b: number): number{
    return a + b
}

function isTrue (a: number ,b: number): boolean | string {
    if(a>b){
        return true
    } else {
        return 'A es menor que B'
    }
}

function sayHello(nombre: string): void { //No retorna nada (void) - any es cuando no sabes qué es lo que retorna
    console.log('Hola' + nombre);
    
}

//INTERFACES

interface IUsers {
    id: number,
    name: string,
    email: string, 
    phone?: number //Opcional
}

interface IUser2 extends IUsers {
    rol: string
}

const user1: IUsers ={  //Tipo interface
    id: 1,
    name: 'string',
    email: 'string',
    // phone: 123456
}

const user2: IUser2 ={
    id: 1,
    name: 'string',
    email: 'string',
    phone: 123456,
    rol: 'Administrador'
}

// ENUM

enum RolUser {
    ADMINISTRADOR = 'Administrador',
    LECTOR = 'Lector'
}

// Tipos personalizados

type TUserAdmin = {
    id: number,
    name: string,
    rol: RolUser.ADMINISTRADOR 
    // rol: 'Administrador' | 'Lector' //Otra opción
}

console.log(user1);

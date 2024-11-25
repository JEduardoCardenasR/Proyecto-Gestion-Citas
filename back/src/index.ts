import { log } from "console";

function suma (a: number ,b: number): number {
    return a + b
}

function isTrue (a: number ,b: number): boolean | string {
    if(a>b){
        return true
    } else {
        return 'A es menor que B'
    }
}

function sayHello(nombre: string): void {
    console.log('Hola' + nombre);
    
}

interface IUsers {
    id: number,
    name: string,
    email: string, 
    phone?: number //Opcional
}

interface IUser2 extends IUsers {
    rol: string
}

const user1: IUsers ={
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

enum RolUser {
    ADMINISTRADOR = 'Administrador',
    LECTOR = 'Lector'
}

type TUserAdmin = {
    id: number,
    name: string,
    rol: RolUser
    // rol: 'Administrador' | 'Lector' //Otra opción
}

console.log(user1);

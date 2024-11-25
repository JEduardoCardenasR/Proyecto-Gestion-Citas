"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function suma(a, b) {
    return a + b;
}
function isTrue(a, b) {
    if (a > b) {
        return true;
    }
    else {
        return 'A es menor que B';
    }
}
function sayHello(nombre) {
    console.log('Hola' + nombre);
}
const user1 = {
    id: 1,
    name: 'string',
    email: 'string',
    // phone: 123456
};
const user2 = {
    id: 1,
    name: 'string',
    email: 'string',
    phone: 123456,
    rol: 'Administrador'
};
var RolUser;
(function (RolUser) {
    RolUser["ADMINISTRADOR"] = "Administrador";
    RolUser["LECTOR"] = "Lector";
})(RolUser || (RolUser = {}));
console.log(user2);

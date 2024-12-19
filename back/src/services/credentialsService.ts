import ICredentialDto from "../dtos/ICredentialDto";
import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [];

let credentialId: number = 1;

//Función que crea credenciales
export const createCredential = async (credentialDto: ICredentialDto): Promise<number> => {
    const newCredential: ICredential = {
        id: credentialId++,
        username: credentialDto.username,
        password: credentialDto.password
    }
    credentials.push(newCredential)
    return newCredential.id;
}

//Función que valida credenciales
export const validateCredential = async (credentialDto: ICredentialDto): Promise<number> => {
   const {username, password} = credentialDto;
   const foundCredential = credentials.find(
    (credential) => credential.username === username
   )
   if(!foundCredential){
    throw Error("Usuario inexistente")
   } else if(foundCredential && foundCredential.password !== password){
    throw Error("Contraseña incorrecta")
   } else {
    return foundCredential.id
   }
}
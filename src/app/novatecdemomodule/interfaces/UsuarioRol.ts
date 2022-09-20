import { Role } from "./Role";
import { Usuario } from "./Usuario";

export interface UsuarioRol{
  id_usuariorol?:number,
  usuario:Usuario,
  rol:Role
}

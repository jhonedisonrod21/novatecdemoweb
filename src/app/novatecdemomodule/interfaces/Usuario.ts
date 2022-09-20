export interface Usuario{
    id_usuario?:number,
    nombres_usuario:string,
    apellidos_usuario:string,
    [usuariorol: string]: any
}

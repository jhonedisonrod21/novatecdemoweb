import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/Usuario';
import { UsuarioRol } from '../interfaces/UsuarioRol';
import { RestDriver } from '../util/RestDriver';
import { Observable } from "rxjs";

@Injectable({
  providedIn: null,
  deps:[RestDriver]
})
export class UsuariosRolesService extends RestDriver<UsuarioRol>{
  constructor(http: HttpClient,private http3:HttpClient) {
    super(environment.httpBaseUrl+'/UsuariosRoles',http);
  }

  getByUser(id_usuario:number,headers?:HttpHeaders):Observable<UsuarioRol[]>{
    return this.http3.get<UsuarioRol[]>(`${environment.httpBaseUrl+'/UsuariosRoles/user/'+id_usuario}`,{headers:headers? headers:new HttpHeaders()})
  }

}

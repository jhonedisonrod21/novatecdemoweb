import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/Usuario';
import { RestDriver } from '../util/RestDriver';

@Injectable({
  providedIn: null,
  deps:[RestDriver]
})
export class UsuariosService extends RestDriver<Usuario>{
  constructor( http: HttpClient) {
    super(environment.httpBaseUrl+'/Usuarios',http);
  }
}
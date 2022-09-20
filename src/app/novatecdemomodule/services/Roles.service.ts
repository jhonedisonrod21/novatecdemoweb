import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../interfaces/Role';
import { RestDriver } from '../util/RestDriver';

@Injectable({
  providedIn: null,
  deps:[RestDriver]
})
export class RolesService extends RestDriver<Role>{
  constructor(http: HttpClient) {
    super(environment.httpBaseUrl+'/Roles',http);
  }
}

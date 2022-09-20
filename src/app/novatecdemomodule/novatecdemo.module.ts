import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesService } from './services/Roles.service';
import { HttpClientModule } from  '@angular/common/http';
import { UsuariosService } from './services/Usuarios.service';
import { UsuariosRolesService } from './services/UsuariosRoles.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports:[],
  providers:[
    RolesService,
    UsuariosRolesService,
    UsuariosService
  ]
})
export class NovatecdemoModule { }

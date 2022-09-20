import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/novatecdemomodule/interfaces/Usuario';
import { UsuarioRol } from 'src/app/novatecdemomodule/interfaces/UsuarioRol';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-nuevousuariodialog',
  templateUrl: './nuevousuariodialog.component.html',
  styleUrls: ['./nuevousuariodialog.component.css'],
})
export class NuevousuariodialogComponent implements OnInit {
  nombres:string = '';
  apellidos:string = '';
  stateOptions = [{label: 'Estudiante', value: 10}, {label: 'Profesor', value: 69}];
  selectedRole:number = -1;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public messageService:MessageService
  ) { }

  cancelar(){
    this.ref.close(undefined);
  }

  enviar(){
    if(this.nombres != '' && this.apellidos != '' && this.selectedRole > 0){
      let usuario:Usuario = {nombres_usuario:this.nombres,apellidos_usuario:this.apellidos};
      let usuariorol:UsuarioRol ={usuario:usuario,rol:this.selectedRole==10?{id_rol:10,nombre_rol:'Estudiante'}:{id_rol:69,nombre_rol:'Profesor'}}
      this.ref.close({usuario:usuario,usuariorol:usuariorol});
    }else{
      this.messageService.add({severity:'error',summary:'Error',detail:'Complete los campos'})
    }
  }

  ngOnInit(): void {

  }

}

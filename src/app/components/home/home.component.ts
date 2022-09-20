import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/novatecdemomodule/services/Roles.service';
import { UsuariosService } from 'src/app/novatecdemomodule/services/Usuarios.service';
import { UsuariosRolesService } from 'src/app/novatecdemomodule/services/UsuariosRoles.service';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/novatecdemomodule/interfaces/Usuario';
import {MegaMenuItem,MenuItem,PrimeIcons} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import { NuevousuariodialogComponent } from '../nuevousuariodialog/nuevousuariodialog.component';
import { UsuarioRol } from 'src/app/novatecdemomodule/interfaces/UsuarioRol';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogService,RolesService,UsuariosRolesService,UsuariosService]
})
export class HomeComponent implements OnInit {
  loaded:boolean = false;
  usuarios:Usuario[] = [];

  constructor(
    private usuariosService:UsuariosService,
    private roles:RolesService,
    private usuariosroles:UsuariosRolesService,
    public messageService: MessageService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.messageService.add({severity:'success', summary:':)', detail:'Bienvenido'});
    this.loadUsers();
  }


  dosomething($event:any){
    const ref = this.dialogService.open(NuevousuariodialogComponent, {
      header: '',
      width: '25vw',
      height: '50vh',
      showHeader:false,
      closable:false
    });
    ref.onClose.subscribe((result)=>{
      if(result){
        this.loaded = false;
        let usuario:Usuario = result.usuario;
        let usuariorol:UsuarioRol = result.usuariorol;
        this.usuariosService.post(usuario).toPromise().then(res=>{
          usuariorol.usuario = res;
          this.usuariosroles.post(usuariorol).toPromise().then(res=>{
            this.loadUsers()
          }).catch(err=>{
            this.messageService.add({severity:'error', summary:'Error de conexion', detail:'Ocurrio un error'});
          })
        }).catch(err=>{
          this.messageService.add({severity:'error', summary:'Error de conexion', detail:'Ocurrio un error'});
        })
        }
    })
  }

  loadUsers(){
    this.usuariosService.getAll().subscribe(obtainedusers=>{
      this.usuarios = obtainedusers;
      let promises = this.usuarios.map((item,index)=>{this.loadRole(item.id_usuario,index)});
      Promise.all(promises).then(results=>{
        console.log(results)
        this.loaded = true;
      }).catch((err)=>{

      }).finally(()=>{
        console.log(this.usuarios)
      })
    },err=>{
      this.messageService.add({severity:'error', summary:'Error de conexion', detail:'Ocurrio un error'});
    })
  }

  loadRole(iduser:any,index:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.usuariosroles.getByUser(iduser).subscribe(res=>{
        this.usuarios[index]['rolAsignado'] = res[0]
        resolve(res)},err=>{reject(err)})
    })
  }

  borrar(id:number){
    let candidato:any = this.usuarios.find(item=>{return item.id_usuario == id});
    let role:any = candidato['rolAsignado'].id_usuariorol;
    this.usuariosroles.delete(role).subscribe(res=>{
      this.usuariosService.delete(candidato.id_usuario).subscribe(res=>{
        this.messageService.add({severity:'warn', summary:'Eliminado', detail:'Se eliminó el registro'});
        this.loadUsers();
      })
    })
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NovatecdemoModule } from './novatecdemomodule/novatecdemo.module';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RolesService } from './novatecdemomodule/services/Roles.service';
import { UsuariosService } from './novatecdemomodule/services/Usuarios.service';
import { UsuariosRolesService } from './novatecdemomodule/services/UsuariosRoles.service';
import { AppRoutingModule } from './AppRoutingModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MegaMenuModule } from 'primeng/megamenu';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NuevousuariodialogComponent } from './components/nuevousuariodialog/nuevousuariodialog.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NuevousuariodialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NovatecdemoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    TableModule,
    MegaMenuModule,
    DividerModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    SelectButtonModule
  ],
  providers: [
    RolesService,
    UsuariosService,
    UsuariosRolesService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

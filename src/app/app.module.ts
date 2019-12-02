import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Rotas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PageModule } from './pages/pages.module';
import {FormsModule} from '@angular/forms';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './login/registre.component';
import { AppComponent } from './app.component';

//Servicios
import { ServiceModule} from './services/service.module';
//import { SettingService} from './services/setting/setting.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
  
  ],
  imports: [
    BrowserModule,
    PageModule,
    FormsModule,
    APP_ROUTES,
    ServiceModule,
    CommonModule
  ],
  providers: [
   //SettingService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTES } from './app.routes';

//Modulos
import { PageModule } from './pages/pages.module';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './login/registre.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

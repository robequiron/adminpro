import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegistreComponent } from './login/registre.component';

const appRoutes: Routes = [
    { path:'login', component:LoginComponent},
    { path:'registre', component:RegistreComponent},
    { path:'**', component:NopagefoundComponent},
];

//UserHash
//Habilita la estrategia de ubicación que usa el fragmento 
//de URL en lugar de la API del historial.
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});
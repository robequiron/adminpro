import { NgModule } from "@angular/core";

//Modulos
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        NopagefoundComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        NopagefoundComponent,
        
    ],
    imports: [
      RouterModule,
      CommonModule
    ]
})

export class SharedModule{};
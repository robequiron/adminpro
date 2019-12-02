import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService,SettingService} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SidebarService,
    SharedService,
    SettingService
  ]
})
export class ServiceModule { }

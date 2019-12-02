import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingService } from '../../services/service.index';

@Component({
  selector: 'app-accont-settings',
  templateUrl: './accont-settings.component.html',
  styles: []
})
export class AccontSettingsComponent implements OnInit {

  tema: String;
  temaUrl: String;

  constructor(private _ajuste:SettingService) {}

  ngOnInit() {
    this.aplicarCheck();
  }

  cambiarColor(tema : String, link: any) {
      this._ajuste.AplicarAjustes(tema);
      this.cambiarCheck( link);

  }

  cambiarCheck( link: any) {
    let selectores: any = document.getElementsByClassName('selector');

    for(let ref of selectores) {
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  aplicarCheck() {
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajuste.ajuste.tema;
  
    
    for(let ref of selectores) {
      if(ref.getAttribute('data-theme')===tema) {
        ref.classList.add('working');
        break;
      }
    }

  }



}

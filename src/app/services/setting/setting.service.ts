import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


// @Injectable({
//   providedIn: 'root'
//Lo comente porque me da error con el @Inject(DOCUMENT) lo importo en app.module.ts
// })
export class SettingService {

  ajuste : Ajuste = {
    temaUrl:"assets/css/colors/default-dark.css",
    tema:"default",
  };

  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
   }

  guardaAjustes() {
    localStorage.setItem('tema',JSON.stringify(this.ajuste));
  }

  cargarAjustes() {
    if(localStorage.getItem('tema')) {
      this.ajuste = JSON.parse(localStorage.getItem('tema'));
      this.AplicarAjustes(this.ajuste.tema);
    } else {
      this.AplicarAjustes(this.ajuste.tema);
    }
  }

  AplicarAjustes(tema:String) {
    let temaUrl= `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', temaUrl);
    this.ajuste.tema = tema;
    this.ajuste.temaUrl = temaUrl;
    this.guardaAjustes();
  }
 
}

interface Ajuste {
  temaUrl: String;
  tema: String;
}
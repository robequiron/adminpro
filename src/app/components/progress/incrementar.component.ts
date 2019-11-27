import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styles: []
})
export class IncrementarComponent implements OnInit {
  @ViewChild('txtprogress',{static:false}) txtprogress: ElementRef;
  @Input('nombre') leyenda: string = "Leyenta";
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  onChange( newValue: number ) {

    


    if (newValue>=100){
      this.progreso = 100;
    } else if (newValue <= 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    
    this.txtprogress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  progresar(valor) {
    let n = valor + this.progreso;
    if (n>100) {
      this.progreso=100;
      this.cambioValor.emit(this.progreso);
      return;
    }
    if (n<0) {
      this.progreso=0;
      this.cambioValor.emit(this.progreso);
      return;
    }
    if(this.progreso==0 && valor<0) {
      return;
    }
    if(this.progreso==100 && valor>0) {
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}

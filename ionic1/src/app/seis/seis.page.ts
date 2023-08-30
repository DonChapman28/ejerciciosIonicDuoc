import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre : string;
  edad : number;
  mensaje : string = "Premium";
  permitir : boolean = false;

  asignaturas = [
                {nombre:"base de datos", nota:50},
                {nombre:"programacion", nota:45},
                {nombre:"matematica", nota:33},
  ]
  constructor() { 
    this.nombre = "juan perez";
    this.edad = 30;
    console.log(this.asignaturas);
    console.table(this.asignaturas);
  


  }

  ngOnInit() {
  }

  mostrarDatos()
  {
    this.permitir = !this.permitir;
  }

}

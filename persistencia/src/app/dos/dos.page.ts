import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../uno/crud.service';


@Component({
  selector: 'app-dos',
  templateUrl: './dos.page.html',
  styleUrls: ['./dos.page.scss'],
})
export class DosPage implements OnInit {
  persona: any = [];
  personaDatos: any = {};
  idPersona : any;
  constructor(private activated:ActivatedRoute, 
              private crud: CrudService) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(async p => {
      this.idPersona = Number(p.get('idUsuario'));
      console.log('user ' + this.idPersona);
  
      if (this.idPersona) {
        try {
          const datos = await this.crud.leer(this.idPersona);
          if (datos) {
            this.personaDatos = datos;
          } else {
            console.log('No se encontraron datos en el almacenamiento local para la clave:', this.idPersona);
          }
        } catch (error) {
          console.error('Error al leer datos del almacenamiento local:', error);
        }
      }
    });
  }


  async eliminarPorRut() {
    // Verificar si el campo 'rut' tiene un valor
    if (this.idPersona) {
      try {
        // Llamar al método leer del servicio CrudService usando el valor de 'persona.rut' como clave
        const datos = await this.crud.eliminar(this.idPersona);
        if (datos) {
          // Los datos se leyeron exitosamente, ahora puedes asignarlos a la propiedad 'persona' para mostrarlos en el HTML
          this.personaDatos = datos;
        } else {
          // Manejar el caso en el que no se encontraron datos para la clave proporcionada
          console.log('No se encontraron datos en el almacenamiento local para la clave:', this.persona.rut);
        }
      } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante la lectura
        console.error('Error al leer datos del almacenamiento local:', error);
      }
    } else {
      // El campo 'rut' está vacío, debes manejar esta situación según tus necesidades
      console.log('El campo "rut" está vacío, no se realizará la búsqueda.');
    }
  }
}

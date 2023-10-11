import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';


@Component({
  selector: 'app-uno',
  templateUrl: './uno.page.html',
  styleUrls: ['./uno.page.scss'],
})
export class UnoPage implements OnInit {
  persona: any = [];
  personaDatos: any = {};
  constructor(private crud: CrudService) { }

  ngOnInit() {
  }

  async agregar()
  {
   
    await this.crud.guardar(this.persona.rut, this.persona);

    
  }

  async buscarPorRut() {
    // Verificar si el campo 'rut' tiene un valor
    if (this.persona.rut) {
      try {
        // Llamar al método leer del servicio CrudService usando el valor de 'persona.rut' como clave
        const datos = await this.crud.leer(this.persona.rut);
        if (datos) {
          // Los datos se leyeron exitosamente, ahora puedes asignarlos a la propiedad 'persona' para mostrarlos en el HTML
          this.personaDatos = datos;
          this.persona = []; 
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
  
 

  async eliminarPorRut() {
    // Verificar si el campo 'rut' tiene un valor
    if (this.persona.rut) {
      try {
        // Llamar al método leer del servicio CrudService usando el valor de 'persona.rut' como clave
        const datos = await this.crud.eliminar(this.persona.rut);
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
      console.log('El campo rut está vacío, no se realizará la búsqueda');
    }
  }
  
  async limpiar()
  {

    
    this.personaDatos = {};

  }
}

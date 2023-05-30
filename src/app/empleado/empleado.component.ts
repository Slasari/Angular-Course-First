import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  
  nombre: string = 'Ariel';
  apellido: string = 'Salcito';
  private edad: number = 23;
  //private: esta propiedad solo es accesible desde el scout donde fue declarada.
  empresa: string = 'Compra Gamer'

  getEdad(){
    return this.edad;
    //Esto es un metodo getter y sirve para acceder a una propiedad private.
  }
}

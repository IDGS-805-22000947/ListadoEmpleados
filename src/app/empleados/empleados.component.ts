import { Component } from '@angular/core';
import { Empleado } from '../modelos/empleado.model';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados: Empleado[] = [];
  nuevoEmpleado: Empleado = {
    numEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: ''
  };

  constructor(private empleadoService: EmpleadoService) {
    this.empleados = this.empleadoService.getEmpleados();
  }

  agregarEmpleado() {
    this.empleadoService.agregarEmpleado({ ...this.nuevoEmpleado });
    this.nuevoEmpleado = { numEmpleado: 0, nombre: '', correo: '', telefono: '', fechaNacimiento: '', sexo: '' };
  }

  eliminarEmpleado(index: number) {
    this.empleadoService.eliminarEmpleado(index);
  }
}
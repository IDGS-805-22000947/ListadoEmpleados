import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado.model';

@Injectable({ providedIn: 'root' })
export class EmpleadoService {
  private empleados: Empleado[] = [];

  getEmpleados() {
    return this.empleados;
  }

  agregarEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  eliminarEmpleado(index: number) {
    this.empleados.splice(index, 1);
  }
}
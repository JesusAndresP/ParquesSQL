import { MatTableDataSource} from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import {EmpleadosI} from '../../../models/empleados.interface';



@Component({
    selector: 'ListEmpleados',
    templateUrl: './list-empleados.component.html',
    styleUrls: ['./list-empelados.component.scss']
  })
  export class ListEmpleadosComponent implements OnInit {
    displayedColumns: string[] = ['DNI', 'NOMBRE', '# SEGURIDAD SOCIAL', 'DIRECCION', 'TELEFONO', 'SALARIO','TIPO DE EMPLEADO'];
  dataSource = new MatTableDataSource();

 

    constructor(){}
 
    ngOnInit(){}
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
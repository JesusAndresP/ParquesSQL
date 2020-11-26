import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadosService } from '../../services/empleados.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({

  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit{
  displayedColumns: string[] = ['ID_Empleado', 'Nombre_Empleado', 'SeguridadSocial', 'Direccion','Telefono','Celular','Sueldo','Tipo_Empleado'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empleadoService: EmpleadosService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados().subscribe(res=> this.dataSource.data = res );
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
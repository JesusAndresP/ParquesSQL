import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadosI } from '../../../models/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormEmpleadosComponent } from '../form-empleados/form-empleados.component';

@Component({

  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit{
  displayedColumns: string[] = ['ID_Empleado', 'Nombre_Empleado', 'SeguridadSocial', 'Direccion','Telefono','Celular','Sueldo','Tipo_Empleado','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();



  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empleadoService: EmpleadosService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados().subscribe(res=> this.dataSource.data = res );
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Metodo editar
  onEdit(element){
    this.resetForm ();
    this.openModal();
    if(element){
      this.empleadoService.selected = element;

    }
  }

 //Metodo eliminar
  //Obtiene el codigo que viene desde la interfaz de usuario e invoca el servicio
  onDelete(id:string){
    this.empleadoService.deleteEmpleado(id);
  }



    //Metodo para abrir pop up
    openModal(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data={
        title: 'Modal'
      };
      dialogConfig.autoFocus = true; //El foco del raton está en el formulario
      this.dialog.open(FormEmpleadosComponent, dialogConfig); //Abre el popup con el formulario

    }
  resetForm(): void{
    this.empleadoService.selected.ID_Empleado= null;
    this.empleadoService.selected.Nombre_Empleado = '';
    this.empleadoService.selected.SeguridadSocial =null;
    this.empleadoService.selected.Direccion ='';
    this.empleadoService.selected.Telefono = null;
    this.empleadoService.selected.Celular = null;
    this.empleadoService.selected.Sueldo = null;
    this.empleadoService.selected.Tipo_Empleado = null;
    this.empleadoService.selected.id = null;
  }


}
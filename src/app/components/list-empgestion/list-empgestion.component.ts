import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormEmpgestionComponent } from '../form-empgestion/form-empgestion.component';

@Component({
  selector: 'app-list-empgestion',
  templateUrl: './list-empgestion.component.html',
  styleUrls: ['./list-empgestion.component.scss']
})
export class ListEmpgestionComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpGestion().subscribe(res=> this.dataSource.data = res );

  }
  displayedColumns: string[] = ['ID_Empleado', 'Nombre_Empleado', 'SeguridadSocial', 'Direccion','Telefono','Celular','Sueldo','Parque','Entrada_Parque','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
      this.dialog.open(FormEmpgestionComponent, dialogConfig); //Abre el popup con el formulario

    }
  resetForm(): void{
    this.empleadoService.selected.ID_Empleado= '';
    this.empleadoService.selected.Nombre_Empleado = '';
    this.empleadoService.selected.SeguridadSocial ='';
    this.empleadoService.selected.Direccion ='';
    this.empleadoService.selected.Telefono = '';
    this.empleadoService.selected.Celular = '';
    this.empleadoService.selected.Sueldo = '';
    this.empleadoService.selected.Tipo_Empleado = '';
    this.empleadoService.selected.Parque = '';
    this.empleadoService.selected.Entrada_Parque = '';
    this.empleadoService.selected.id = '';
  }



}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormEmpconservacionComponent } from '../form-empconservacion/form-empconservacion.component';


@Component({
  selector: 'app-list-empconservacion',
  templateUrl: './list-empconservacion.component.html',
  styleUrls: ['./list-empconservacion.component.scss']
})
export class ListEmpconservacionComponent implements OnInit {
  

  constructor(
    private empleadoService: EmpleadosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpConservacion().subscribe(res=> this.dataSource.data = res );
  }

  displayedColumns: string[] = ['ID_Empleado', 'Nombre_Empleado', 'SeguridadSocial', 'Direccion','Telefono','Celular','Sueldo','Especialidad','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();

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
        this.dialog.open(FormEmpconservacionComponent, dialogConfig); //Abre el popup con el formulario
  
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
      this.empleadoService.selected.Especialidad= '';
      this.empleadoService.selected.Entrada_Parque= '';
      this.empleadoService.selected.Titulacion= '';
      this.empleadoService.selected.Area= '';
      this.empleadoService.selected.id = null;
    }
  

}

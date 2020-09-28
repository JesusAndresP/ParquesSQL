import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { EmpleadosI} from '../../../models/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';



@Component({

  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'nombre', 'n_ss', 'direccion','telefono','salario','tipo_empleado','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empleadoService: EmpleadosService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados().subscribe(res=> this.dataSource.data = res);
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 //Metodo editar
  onEdit(element){
    this.resetForm();
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

  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      title: 'Modal'
    };
    dialogConfig.autoFocus = true; //El foco del raton está en el formulario
    this.dialog.open(FormComponent, dialogConfig); //Abre el popup con el formulario

  }

  resetForm(): void{
    this.empleadoService.selected.dni= null;
    this.empleadoService.selected.nombre = '';
    this.empleadoService.selected.n_ss ='';
    this.empleadoService.selected.direccion ='';
    this.empleadoService.selected.telefono = '';
    this.empleadoService.selected.salario = null;
    this.empleadoService.selected.tipo_empleado = null;
    this.empleadoService.selected.id = null;
  }

    selector: 'app-list-empleados',
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

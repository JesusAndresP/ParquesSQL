import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ParquesI } from '../../../models/parques.interface';
import { ParquesService } from '../../services/parques.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';



@Component({
  selector: 'app-list-parques',
  templateUrl: './list-parques.component.html',
  styleUrls: ['./list-parques.component.scss']
})
export class ListParquesComponent implements OnInit {

  displayedColumns: string[] = ['ID_Parque', 'Superficie_CA', 'Nombre_Parque', 'Fecha_Declaracion','Activo','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private parquesService: ParquesService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.parquesService.getAllParques().subscribe(res=> this.dataSource.data = res);
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
      this.parquesService.selected = element;

    }
  }
  //Metodo eliminar
  //Obtiene el codigo que viene desde la interfaz de usuario e invoca el servicio
  onDelete(id:string){
    this.parquesService.deleteParque(id);
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
    this.parquesService.selected.ID_Parque= null;
    this.parquesService.selected.Superficie_CA = '';
    this.parquesService.selected.Nombre_Parque ='';
    this.parquesService.selected.Fecha_Declaracion ='';
    this.parquesService.selected.Activo = '';
    this.parquesService.selected.id = null;
  }


}

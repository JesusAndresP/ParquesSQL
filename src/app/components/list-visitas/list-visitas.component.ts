import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { VisitasService } from 'src/app/services/visitas.service';
import { FormVisitaComponent } from '../form-visita/form-visita.component';


@Component({
  selector: 'app-list-visitas',
  templateUrl: './list-visitas.component.html',
  styleUrls: ['./list-visitas.component.scss']
})
export class ListVisitasComponent implements OnInit {
  
  displayedColumns: string[] = ['ID_Parque', 'ID_Visitante','BtnAgregar'];
  dataSource = new MatTableDataSource();
  constructor(
    private visitasService: VisitasService,
    private dialog: MatDialog)
   { }
  

  ngOnInit(): void {
    this.visitasService.gelAllVisitas().subscribe(res=> this.dataSource.data = res);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   //Metodo editar
   onEdit(element){
    this.resetForm();
    this.openModal();
    if(element){
      this.visitasService.selected = element;
    }
  }
  //Metodo eliminar
  //Obtiene el codigo que viene desde la interfaz de usuario e invoca el servicio
//Metodo para abrir pop up
  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      title: 'Modal'
    };
    dialogConfig.autoFocus = true; //El foco del raton está en el formulario
    this.dialog.open(FormVisitaComponent, dialogConfig); //Abre el popup con el formulario

  }

  resetForm(): void{
    this.visitasService.selected.ID_Visitante = '';
    this.visitasService.selected.ID_Parque = '';
  }



}

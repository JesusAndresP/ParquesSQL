import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { EspeciesI} from '../../../models/especies.interface';
import { EspeciesService } from '../../services/especies.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormEspeciesComponent } from '../form-especies/form-especies.component';



@Component({
  selector: 'app-list-especies',
  templateUrl: './list-especies.component.html',
  styleUrls: ['./list-especies.component.scss']
})
export class ListEspeciesComponent implements OnInit {

  displayedColumns: string[] = ['Tipo_Especie', 'Nombre_Especie', 'Sexo','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private especiesService: EspeciesService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.especiesService.getAllEspecies().subscribe(res=> this.dataSource.data = res);
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
      this.especiesService.selected = element;

    }
  }
  //Metodo eliminar
  //Obtiene el codigo que viene desde la interfaz de usuario e invoca el servicio
  onDelete(id:string){
    this.especiesService.deleteEspecies(id);
  }
//Metodo para abrir pop up
  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      title: 'Modal'
    };
    dialogConfig.autoFocus = true; //El foco del raton está en el formulario
    this.dialog.open(FormEspeciesComponent, dialogConfig); //Abre el popup con el formulario

  }

  resetForm(): void{
    this.especiesService.selected.Tipo_Especie = '';
    this.especiesService.selected.Nombre_Especie ='';
    this.especiesService.selected.Sexo ='';
  }


}

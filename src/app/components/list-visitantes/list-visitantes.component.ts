import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { VisitantesI } from '../../../models/visitantes.interface';
import { VisitantesService } from '../../services/visitantes.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormVisitantesComponent } from '../form-visitantes/form-visitantes.component';



@Component({
  selector: 'app-list-visitantes',
  templateUrl: './list-visitantes.component.html',
  styleUrls: ['./list-visitantes.component.scss']
})
export class ListVisitantesComponent implements OnInit {

  displayedColumns: string[] = ['ID_Visitante', 'Nombre_Visitante', 'Direccion_Visitante', 'Profesion_Visitante','Activo','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private visitanteService: VisitantesService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.visitanteService.getAllVisitantes().subscribe(res => this.dataSource.data = res) 
  }
  ngAfterViewInit(){
    this.dataSource.sort =  this.sort;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element){
    this.resetForm();
    this.openModal();
    if(element){
      this.visitanteService.selected = element;

    }

  }
  onDelete(id: string){
    this.visitanteService.deleteVisitante(id);

  }
  //Metodo para abrir pop up
  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      title: 'Modal'
    };
    dialogConfig.autoFocus = true; //El foco del raton está en el formulario
    this.dialog.open(FormVisitantesComponent, dialogConfig); //Abre el popup con el formulario

  }
  resetForm(): void{
    this.visitanteService.selected.ID_Visitante= null;
    this.visitanteService.selected.Nombre_Visitante = '';
    this.visitanteService.selected.Direccion_Visitante ='';
    this.visitanteService.selected.Profesion_Visitante ='';
    this.visitanteService.selected.Activo = '';
    this.visitanteService.selected.id = null;
  }




  

}

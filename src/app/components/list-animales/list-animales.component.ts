import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EspeciesService } from 'src/app/services/especies.service';
import { FormAnimalesComponent } from '../form-animales/form-animales.component';


@Component({
  selector: 'app-list-animales',
  templateUrl: './list-animales.component.html',
  styleUrls: ['./list-animales.component.scss']
})
export class ListAnimalesComponent implements OnInit {
  

  constructor(private especiesService: EspeciesService,
    private dialog: MatDialog) { }

  displayedColumns: string[] = ['ID_Especie', 'Denom_Cientifica', 'Denom_Vulgar','Sexo','Periodo_Celo','Tipo_Alimentacion','Alimento_De', 'Acciones', 'BtnAgregar'];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.especiesService.getAllEspAnimal().subscribe(res=> this.dataSource.data = res);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEdit(element){
    this.resetForm();
    this.openModal();
    if(element){
      this.especiesService.selected=element;
    }
  }
  onDelete(id: string){
    this.especiesService.deleteEspecies(id);
  }
  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      title: 'Modal'
    };
    dialogConfig.autoFocus = true; //El foco del raton está en el formulario
    this.dialog.open(FormAnimalesComponent, dialogConfig); //Abre el popup con el formulario
  }
  resetForm(){
    this.especiesService.selected.ID_Especie = '';
    this.especiesService.selected.Denom_Cientifica = '';
    this.especiesService.selected.Denom_Vulgar = '';
    this.especiesService.selected.Periodo_Celo = '';
    this.especiesService.selected.Sexo = '';
    this.especiesService.selected.Tipo_Especie = '';
    this.especiesService.selected.Tipo_Alimentacion = '';
    this.especiesService.selected.Alimento_De = '';
    this.especiesService.selected.Floracion = '';
    this.especiesService.selected.Periodo_Floracion = '';
    this.especiesService.selected.Tipo_Mineral = '';
    this.especiesService.selected.id = null;
  }
}

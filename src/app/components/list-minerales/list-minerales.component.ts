import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EspeciesService } from 'src/app/services/especies.service';
import { FormMineralesComponent } from '../form-minerales/form-minerales.component';


@Component({
  selector: 'app-list-minerales',
  templateUrl: './list-minerales.component.html',
  styleUrls: ['./list-minerales.component.scss']
})

export class ListMineralesComponent implements OnInit {
  displayedColumns: string[] = ['ID_Especie', 'Denom_Cientifica','Denom_Vulgar','Tipo_Mineral','Area','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();


  constructor(private especiesService: EspeciesService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.especiesService.getAllEspMineral().subscribe(res=> this.dataSource.data = res);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element){
        this.resetForm();
        this.openModal();
        if(element){
          this.especiesService.selected = element;
    
        }
      }
      onDelete(id:string){
        this.especiesService.deleteEspecies(id);
      }
      openModal(): void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data={
          title: 'Modal'
        };
        dialogConfig.autoFocus = true; 
        this.dialog.open(FormMineralesComponent, dialogConfig);
    
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

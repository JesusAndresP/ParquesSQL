import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {MatTableDataSource} from '@angular/material/table';
import { AreasService } from 'src/app/services/areas.service';
import { FormAreasComponent } from '../form-areas/form-areas.component';



@Component({
  selector: 'app-list-areas',
  templateUrl: './list-areas.component.html',
  styleUrls: ['./list-areas.component.scss']
})
export class ListAreasComponent implements OnInit {
  displayedColumns: string[] = ['ID_Area', 'Nombre_Area', 'Extension_Area', 'Acciones', 'new'];
  dataSource = new MatTableDataSource();

 
  constructor(
    private areasService: AreasService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.areasService.getAllAreas().subscribe(res=> this.dataSource.data = res);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element){
    this.resetForm();
    this.openModal();
    if(element){
      this.areasService.selected  = element;
    }
  }

  onDelete(id: string){
    this.areasService.deleteArea(id);
  }

  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(FormAreasComponent, dialogConfig);
  }

  resetForm(): void{
    this.areasService.selected.ID_Area = '';
    this.areasService.selected.Extension_Area ='';
    this.areasService.selected.Nombre_Area = '';
    this.areasService.selected.id = null;
  }


}

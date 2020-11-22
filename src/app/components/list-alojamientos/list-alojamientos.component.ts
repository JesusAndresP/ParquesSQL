import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AlojamientosService } from 'src/app/services/alojamientos.service';
import { FormAlojamientosComponent } from '../form-alojamientos/form-alojamientos.component';


@Component({
  selector: 'app-list-alojamientos',
  templateUrl: './list-alojamientos.component.html',
  styleUrls: ['./list-alojamientos.component.scss']
})
export class ListAlojamientosComponent implements OnInit {
  displayedColumns: string[] = ['ID_Alojamiento', 'Capacidad', 'Categoria', 'Acciones', 'new'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private alojamientosService: AlojamientosService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.alojamientosService.gelAllAlojamientos().subscribe(res=> this.dataSource.data = res)
  }

  onEdit(element){
    this.resetForm();
    this.openModal();
    if(element){
      this.alojamientosService.selected = element;
    }
  }

  onDelete(id: string){
    this.alojamientosService.deleteAlojamiento(id);
  }
  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      title: 'Modal'
    }
    dialogConfig.autoFocus = true;
    this.dialog.open(FormAlojamientosComponent, dialogConfig);
  }

  resetForm():void{
    this.alojamientosService.selected.ID_Alojamiento = '';
    this.alojamientosService.selected.Capacidad = 1;
    this.alojamientosService.selected.Categoria = '';
    this.alojamientosService.selected.id= null;


  }

}

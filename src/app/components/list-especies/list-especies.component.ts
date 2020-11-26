import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { EspeciesI} from '../../../models/especies.interface';
import { EspeciesService } from '../../services/especies.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-list-especies',
  templateUrl: './list-especies.component.html',
  styleUrls: ['./list-especies.component.scss']
})
export class ListEspeciesComponent implements OnInit {

  displayedColumns: string[] = ['ID_Especie', 'Denom_Cientifica','Denom_Vulgar','Tipo_Especie',"Area"];
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
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlojamientosService } from 'src/app/services/alojamientos.service';
import { ParquesService } from 'src/app/services/parques.service';
import { ParquesI } from 'src/models/parques.interface';


@Component({
  selector: 'app-form-alojamientos',
  templateUrl: './form-alojamientos.component.html',
  styleUrls: ['./form-alojamientos.component.scss']
})

export class FormAlojamientosComponent implements OnInit {
  public parques$: Observable<ParquesI[]>;


  constructor(
    public alojamiento: AlojamientosService,
    public parques: ParquesService,
    private dialogRef: MatDialogRef<FormAlojamientosComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
    this.parques$ = this.parques.getAllParques();
  }
  onSaveForm(){
    if(this.alojamiento.selected.id == null){
      let newAlojamiento={
        ID_Alojamiento: this.alojamiento.selected.ID_Alojamiento,
        Categoria: this.alojamiento.selected.Categoria,
        Capacidad: this.alojamiento.selected.Capacidad,
        Parque: this.alojamiento.selected.Parque
      }
      this.alojamiento.addAlojamiento(newAlojamiento);
    }else{
      this.alojamiento.editAlojamiento(this.alojamiento.selected);
    }
    this.close();

  }
  close(): void{
    this.dialogRef.close();

  }
  

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

interface categorias {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-alojamientos',
  templateUrl: './form-alojamientos.component.html',
  styleUrls: ['./form-alojamientos.component.scss']
})

export class FormAlojamientosComponent implements OnInit {

  constructor(
    public alojamiento: AlojamientosService,
    private dialogRef: MatDialogRef<FormAlojamientosComponent>
  ) { }

  ngOnInit(): void {
  }
  onSaveForm(){
    if(this.alojamiento.selected.id == null){
      let newAlojamiento={
        ID_Alojamiento: this.alojamiento.selected.ID_Alojamiento,
        Categoria: this.alojamiento.selected.Categoria,
        Capacidad: this.alojamiento.selected.Capacidad
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

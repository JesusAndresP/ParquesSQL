import { Component, OnInit, Inject } from '@angular/core';
import { ParquesService } from '../../services/parques.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-form-parques',
  templateUrl: './form-parques.component.html',
  styleUrls: ['./form-parques.component.scss']
})
export class FormParquesComponent implements OnInit {

  constructor(
    public parque: ParquesService,
    private dialogRef: MatDialogRef<FormParquesComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.parque.selected.id == null){
      let newParque = {
        ID_Parque: this.parque.selected.ID_Parque,
        Superficie_CA: this.parque.selected.Superficie_CA,
        Nombre_Parque: this.parque.selected.Nombre_Parque,
        Fecha_Declaracion: this.parque.selected.Fecha_Declaracion,
        Activo: this.parque.selected.Activo
      }
      this.parque.addParque(newParque);
    }
    else{
      this.parque.editParque(this.parque.selected);

    }
    this.close();
  }
  //metodo para cerrar pop up
  close(): void{
    this.dialogRef.close();

  }

}

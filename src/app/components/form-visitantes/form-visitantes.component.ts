import { Component, OnInit, Inject } from '@angular/core';
import { VisitantesService } from '../../services/visitantes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-form-visitantes',
  templateUrl: './form-visitantes.component.html',
  styleUrls: ['./form-visitantes.component.scss']
})
export class FormVisitantesComponent implements OnInit {

  constructor(
    public visitante: VisitantesService,
    private dialogRef: MatDialogRef<FormVisitantesComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.visitante.selected.id == null){
      let newVisitante = {
        ID_Visitante: this.visitante.selected.ID_Visitante,
        Nombre_Visitante: this.visitante.selected.Nombre_Visitante,
        Direccion_Visitante: this.visitante.selected.Direccion_Visitante,
        Profesion_Visitante: this.visitante.selected.Profesion_Visitante,
        Activo: 'true'
      }
      this.visitante.addVisitante(newVisitante);
    }
    else{
      this.visitante.editVisitante(this.visitante.selected);

    }
    this.close();
  }
    //metodo para cerrar pop up
    close(): void{
      this.dialogRef.close();
  
    }
  

}

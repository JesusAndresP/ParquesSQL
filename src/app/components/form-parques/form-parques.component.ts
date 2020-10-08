import { Component, OnInit, Inject } from '@angular/core';
import { ParquesService } from '../../services/parques.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-form-parques',
  templateUrl: './form-parques.component.html',
  styleUrls: ['./form-parques.component.scss']
})
export class FormParquesComponent implements OnInit {
  signupForm: FormGroup
  constructor(
    private _builder: FormBuilder,
    public parque: ParquesService,
    private dialogRef: MatDialogRef<FormParquesComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.signupForm =  this._builder.group({
        ID_Parque:['',Validators.compose([Validators.min(1),Validators.required])],
        Superficie_CA:['',Validators.compose([Validators.maxLength(10),Validators.required])],
        Nombre_Parque:['',Validators.compose([Validators.maxLength(100),Validators.required])],
        Fecha_Declaracion:['',Validators.required]
      })
     }

  ngOnInit(): void {
  }

  onSaveForm(values){
    if(this.parque.selected.id == null){
      let newParque = {
        ID_Parque: this.parque.selected.ID_Parque,
        Superficie_CA: this.parque.selected.Superficie_CA,
        Nombre_Parque: this.parque.selected.Nombre_Parque,
        Fecha_Declaracion: this.parque.selected.Fecha_Declaracion,
        Activo: 'true'
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

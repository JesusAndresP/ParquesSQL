import { Component, OnInit , Inject } from '@angular/core';
import {ParquesService} from '../../services/parques.service';
import {MAT_DIALOG_DATA,  MatDialogRef  } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'formModal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

/*  createFormGroup(){
    return new FormGroup({
        ID_Parque:new FormControl('', Validators.requiered) ,
        Superficie_CA: new FormControl('',Validators.requiered),
        Nombre_Parque: new FormControl('',Validators.requiered),
        Fecha_Declaracion:new FormControl('',Validators.requiered)
    })
  }
*/


  constructor(
    public parque: ParquesService,
    private dialogRef: MatDialogRef <FormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      //this.formParque = this.createFormGroup();
     }

  ngOnInit() {
  }

  onSaveForm(){
    if(this.parque.selected.id ==  null){
      let newParque =  {
        ID_Parque: this.parque.selected.ID_Parque,
        Superficie_CA: this.parque.selected.Superficie_CA,
        Nombre_Parque: this.parque.selected.Nombre_Parque,
        Fecha_Declaracion: this.parque.selected.Fecha_Declaracion,
        Activo: "true"
      }
      this.parque.addParque(newParque);

    }
    else{
      this.parque.editParque (this.parque.selected);
    }
    this.close();
  }
    close(): void{
      this.dialogRef.close();
    }




}

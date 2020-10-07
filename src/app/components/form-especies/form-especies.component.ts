import { Component, OnInit, Inject } from '@angular/core';
import { from } from 'rxjs';
import { EspeciesService } from '../../services/especies.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-form-especies',
  templateUrl: './form-especies.component.html',
  styleUrls: ['./form-especies.component.scss']
})
export class FormEspeciesComponent implements OnInit {

  constructor(
    public especies: EspeciesService,
    private dialogRef: MatDialogRef<FormEspeciesComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }


  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.especies.selected.id==null){
      let newEspecies ={
      Tipo_Especie: this.especies.selected.Tipo_Especie,
      Nombre_Especie: this.especies.selected.Nombre_Especie,
      Sexo: this.especies.selected.Sexo
      }
      this.especies.addEspecies(newEspecies);
    }else{
      this.especies.editEspecies(this.especies.selected);
    }
    this.close();
  }
    //metodo para cerrar pop up
  close(): void{
    this.dialogRef.close();

  }

}

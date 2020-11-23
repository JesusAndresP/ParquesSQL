import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EspeciesService } from 'src/app/services/especies.service';

@Component({
  selector: 'app-form-minerales',
  templateUrl: './form-minerales.component.html',
  styleUrls: ['./form-minerales.component.scss']
})
export class FormMineralesComponent implements OnInit {

  constructor(
    public especies: EspeciesService,
    private dialogRef: MatDialogRef<FormMineralesComponent>,
    @Inject(MAT_DIALOG_DATA) data)
   { }

  ngOnInit(): void {
  }
  onSaveForm(){
    if(this.especies.selected.id==null){
      let newEspecie ={
        ID_Especie: 'M'+this.especies.selected.ID_Especie,
        Denom_Cientifica: this.especies.selected.Denom_Cientifica,
        Denom_Vulgar:this.especies.selected.Denom_Vulgar,
        Tipo_Especie: 'Mineral',
        Tipo_Mineral: this.especies.selected.Tipo_Mineral,
      }

      this.especies.addEspecies(newEspecie);
    }
    else{
      this.especies.editEspecies(this.especies.selected);
    }
    this.close();
  }
  
  close(): void{
    this.dialogRef.close();
  }


}

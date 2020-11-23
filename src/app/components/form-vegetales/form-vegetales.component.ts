import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EspeciesService } from 'src/app/services/especies.service';

@Component({
  selector: 'app-form-vegetales',
  templateUrl: './form-vegetales.component.html',
  styleUrls: ['./form-vegetales.component.scss']
})
export class FormVegetalesComponent implements OnInit {

  constructor(
    public especies: EspeciesService,
    private dialogRef: MatDialogRef<FormVegetalesComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.especies.selected.id==null){
      let newEspecie ={
        ID_Especie: 'V'+this.especies.selected.ID_Especie,
        Denom_Cientifica: this.especies.selected.Denom_Cientifica,
        Denom_Vulgar:this.especies.selected.Denom_Vulgar,
        Tipo_Especie: 'Vegetal',
        Alimento_De: this.especies.selected.Alimento_De,
        Floracion: this.especies.selected.Floracion,
        Periodo_Floracion: this.especies.selected.Periodo_Floracion,
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

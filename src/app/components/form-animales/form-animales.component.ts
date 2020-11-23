import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EspeciesService } from 'src/app/services/especies.service';
@Component({
  selector: 'app-form-animales',
  templateUrl: './form-animales.component.html',
  styleUrls: ['./form-animales.component.scss']
})
export class FormAnimalesComponent implements OnInit {

  constructor(    
    public especies: EspeciesService,
    private dialogRef: MatDialogRef<FormAnimalesComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.especies.selected.id==null){
      let newEspecie ={
        ID_Especie: 'A'+this.especies.selected.ID_Especie,
        Denom_Cientifica: this.especies.selected.Denom_Cientifica,
        Denom_Vulgar:this.especies.selected.Denom_Vulgar,
        Tipo_Especie: 'Animal',
        Sexo: this.especies.selected.Sexo,
        Periodo_Celo: this.especies.selected.Periodo_Celo,
        Tipo_Alimentacion: this.especies.selected.Tipo_Alimentacion,
        Alimento_De: this.especies.selected.Alimento_De
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

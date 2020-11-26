import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AreasService } from 'src/app/services/areas.service';
import { EspeciesID, EspeciesService } from 'src/app/services/especies.service';
import { AreaI } from 'src/models/areas.interface';
@Component({
  selector: 'app-form-animales',
  templateUrl: './form-animales.component.html',
  styleUrls: ['./form-animales.component.scss']
})
export class FormAnimalesComponent implements OnInit {
  public area$: Observable<AreaI[]>;
  constructor(    
    public especies: EspeciesService,
    public area: AreasService,
    private dialogRef: MatDialogRef<FormAnimalesComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { }

  ngOnInit(): void {
    this.area$ = this.area.getAllAreas();
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
        Alimento_De: this.especies.selected.Alimento_De,
        Area: this.especies.selected.Area
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

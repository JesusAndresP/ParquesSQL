import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AreasService } from 'src/app/services/areas.service';
import { EspeciesService } from 'src/app/services/especies.service';
import { AreaI } from 'src/models/areas.interface';

@Component({
  selector: 'app-form-vegetales',
  templateUrl: './form-vegetales.component.html',
  styleUrls: ['./form-vegetales.component.scss']
})
export class FormVegetalesComponent implements OnInit {
  public area$: Observable<AreaI[]>;


  constructor(
    public especies: EspeciesService,
    public area: AreasService,

    private dialogRef: MatDialogRef<FormVegetalesComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
    this.area$ = this.area.getAllAreas();

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

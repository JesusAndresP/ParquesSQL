import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ParquesService } from 'src/app/services/parques.service';
import { VisitantesService } from 'src/app/services/visitantes.service';
import { VisitasService } from 'src/app/services/visitas.service';
import { ParquesI } from 'src/models/parques.interface';
import { VisitantesI } from 'src/models/visitantes.interface';

@Component({
  selector: 'app-form-visita',
  templateUrl: './form-visita.component.html',
  styleUrls: ['./form-visita.component.scss']
})
export class FormVisitaComponent implements OnInit {
  public parques$: Observable<ParquesI[]>;
  public visitantes$: Observable<VisitantesI[]>;

  constructor(    
    public parque: ParquesService,
    public visitante: VisitantesService,
    public visita: VisitasService,
    private dialogRef: MatDialogRef<FormVisitaComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.parques$ = this.parque.getAllParques();
    this.visitantes$ = this.visitante.getAllVisitantes();
  }
  onSaveForm(){
    if(this.visita.selected.id ==null){
      let newVisita ={
        ID_Visitante: this.visita.selected.ID_Visitante,
        ID_Parque: this.visita.selected.ID_Parque,
      }
      this.visita.addVisita(newVisita);
    }

    this.close();
  }
    //metodo para cerrar pop up
  close(): void{
    this.dialogRef.close();

  }


}

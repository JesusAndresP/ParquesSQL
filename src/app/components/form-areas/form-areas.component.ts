import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-form-areas',
  templateUrl: './form-areas.component.html',
  styleUrls: ['./form-areas.component.scss']
})
export class FormAreasComponent implements OnInit {

  constructor(
    public area: AreasService,
    private dialogRef: MatDialogRef<FormAreasComponent>,
    @Inject(MAT_DIALOG_DATA) data ) { }

  ngOnInit(): void {
  }
  onSaveForm(){
    if(this.area.selected.id == null){
      let newArea={
        ID_Area: this.area.selected.ID_Area,
        Nombre_Area: this.area.selected.Nombre_Area,
        Extension_Area: this.area.selected.Extension_Area
      }
      this.area.addArea(newArea);
    }else{
      this.area.editArea(this.area.selected);
    }
    this.close();
  }

  close(): void{
    this.dialogRef.close();
  }

}

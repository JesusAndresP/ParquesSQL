import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AreasService } from 'src/app/services/areas.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { AreaI } from 'src/models/areas.interface';

@Component({
  selector: 'app-form-empvigilantes',
  templateUrl: './form-empvigilantes.component.html',
  styleUrls: ['./form-empvigilantes.component.scss']
})
export class FormEmpvigilantesComponent implements OnInit {
  public area$: Observable<AreaI[]>;


  constructor(
    public empleado: EmpleadosService,
    public area: AreasService,
    private dialogRef: MatDialogRef<FormEmpvigilantesComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
    this.area$ = this.area.getAllAreas();
  }
  onSaveForm(){
    if(this.empleado.selected.id ==null){
      let newEmpleado ={
        ID_Empleado: this.empleado.selected.ID_Empleado,
        Nombre_Empleado: this.empleado.selected.Nombre_Empleado,
        Sueldo: this.empleado.selected.Sueldo,
        Telefono: this.empleado.selected.Telefono,
        Celular: this.empleado.selected.Celular,
        Direccion: this.empleado.selected.Direccion,
        SeguridadSocial: this.empleado.selected.SeguridadSocial,
        Tipo_Empleado: 'Vigilante',
        Area: this.empleado.selected.Area,
      }
      this.empleado.addEmpleado(newEmpleado);
    }
    else{
      this.empleado.editEmpleado(this.empleado.selected);
    }
    this.close();
  }
    //metodo para cerrar pop up
  close(): void{
    this.dialogRef.close();

  }


}

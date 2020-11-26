import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ParquesService } from 'src/app/services/parques.service';
import { ParquesI } from 'src/models/parques.interface';

@Component({
  selector: 'app-form-empgestion',
  templateUrl: './form-empgestion.component.html',
  styleUrls: ['./form-empgestion.component.scss']
})
export class FormEmpgestionComponent implements OnInit {
  public parques$: Observable<ParquesI[]>;

  constructor(
    public empleado: EmpleadosService,
    public parques: ParquesService,
    private dialogRef: MatDialogRef<FormEmpgestionComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
    this.parques$ = this.parques.getAllParques();
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
        Tipo_Empleado: 'Gestion',
        Entrada_Parque: this.empleado.selected.Entrada_Parque,
        Parque: this.empleado.selected.Parque

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

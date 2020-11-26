import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-form-empinvestigacion',
  templateUrl: './form-empinvestigacion.component.html',
  styleUrls: ['./form-empinvestigacion.component.scss']
})
export class FormEmpinvestigacionComponent implements OnInit {

  constructor(
    public empleado: EmpleadosService,
    private dialogRef: MatDialogRef<FormEmpinvestigacionComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }


  ngOnInit(): void {
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
        Tipo_Empleado: 'Investigacion',
        Titulacion: this.empleado.selected.Titulacion,
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




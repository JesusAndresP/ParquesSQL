import { Component, OnInit, Inject } from '@angular/core';
import { from } from 'rxjs';
import { EmpleadosService } from '../../services/empleados.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-form-empleados',
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.scss']
})
export class FormEmpleadosComponent implements OnInit {

  constructor(
    public empleado: EmpleadosService,
    private dialogRef: MatDialogRef<FormEmpleadosComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }


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
        Tipo_Empleado: this.empleado.selected.Tipo_Empleado
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

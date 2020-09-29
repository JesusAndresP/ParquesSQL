import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { EmpleadosI } from '../../models/empleados.interface';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database

export interface EmpleadosID extends EmpleadosI {id: string;}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private empleadosCollection: AngularFirestoreCollection<EmpleadosI>;
  empleados: Observable<EmpleadosID[]>;

  public selected ={
    id: null,
    ID_Empleado: 0,
    Nombre_Empleado:'',
    SeguridadSocial:0,
    Direccion: '',
    Telefono:0,
    Celular:0,
    Sueldo: 0,
    Tipo_Empleado: '',
  };


  constructor(private readonly afs: AngularFirestore) {
    this.empleadosCollection = afs.collection<EmpleadosI>('empleados');
    this.empleados = this.empleadosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EmpleadosI;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  addEmpleado(empleado:EmpleadosI){
    return this.empleadosCollection.add(empleado);

  }

//Devuelve todos los empleados de nuestra coleccion
  getAllEmpleados(){
    return this.empleados;
  }

  editEmpleado(empleado:EmpleadosID){

    return this.empleadosCollection.doc(empleado.id).update(empleado);

  }
  //Obtiene el id del dato a eliminar y lo borra de firebase
  deleteEmpleado(id: string){
    return this.empleadosCollection.doc(id).delete();
  }
}

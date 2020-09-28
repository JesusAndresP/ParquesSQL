import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
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
    dni: 0,
    nombre:'',
    n_ss:'',
    direccion: '',
    telefono:'',
    salario: '',
    tipo_empleado: '',
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
  getAllEmpleados(){
    return this.empleados;
  }

  editEmpleado(empleado:EmpleadosID){

    return this.empleadosCollection.doc(empleado.id).update(this.empleados);

  }
  //Obtiene el id del dato a eliminar y lo borra de firebase
  deleteEmpleado(id: string){
    return this.empleadosCollection.doc(id).delete();
  }
  addEmpleado(empelado:EmpleadosI){
    return this.empleadosCollection.add(empelado);

  }
}

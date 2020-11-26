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
  gestion$: Observable<EmpleadosI[]>;
  conservacion$: Observable<EmpleadosI[]>
  investigacion$: Observable<EmpleadosI[]>
  vigilante$: Observable<EmpleadosI[]>


  public selected ={
    id: null,
    ID_Empleado: '',
    Nombre_Empleado:'',
    SeguridadSocial:'',
    Direccion: '',
    Telefono:'',
    Celular:'',
    Sueldo: '',
    Tipo_Empleado: '',
    Especialidad: '',
    Entrada_Parque: '',
    Titulacion: '',
    Area: '',
    Parque:''
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

  getAllEmpConservacion() {
    const post  = this.afs.collection('empleados', ref => ref.where('Tipo_Empleado', '==', 'Conservacion'));
    return this.conservacion$= post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EmpleadosID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllEmpGestion() {
    const post  = this.afs.collection('empleados', ref => ref.where('Tipo_Empleado', '==', 'Gestion'));
    return this.gestion$= post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EmpleadosID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllEmpInvestigacion() {
    const post  = this.afs.collection('empleados', ref => ref.where('Tipo_Empleado', '==', 'Investigacion'));
    return this.investigacion$= post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EmpleadosID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllEmpVigilante() {
    const post  = this.afs.collection('empleados', ref => ref.where('Tipo_Empleado', '==', 'Vigilante'));
    return this.vigilante$= post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EmpleadosID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }







}

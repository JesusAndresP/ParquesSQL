import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { ParquesI } from '../../models/parques.interface';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database

export interface ParquesID extends ParquesI {id: string;}

@Injectable({
  providedIn: 'root'
})
export class ParquesService {
  private parquesCollection: AngularFirestoreCollection<ParquesI>;
  parques: Observable<ParquesID[]>;
  public selected ={
    id: null,
    ID_Parque: 0,
    Superficie_CA:'',
    Nombre_Parque:'',
    Fecha_Declaracion: '',
    Activo:''
  };


  constructor(private readonly afs: AngularFirestore) {
    this.parquesCollection = afs.collection<ParquesI>('parques');
    this.parques = this.parquesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ParquesI;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
  getAllParques(){
    // retorna todos los parques
    return this.parques;
  }

  editParque(parque:ParquesID){

    return this.parquesCollection.doc(parque.id).update(parque);

  }
  //Obtiene el id del dato a eliminar y lo borra de firebase
  deleteParque(id: string){
    return this.parquesCollection.doc(id).delete();
  }
  addParque(parque:ParquesI){
    return this.parquesCollection.add(parque);

  }
}

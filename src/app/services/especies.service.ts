import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { EspeciesI } from '../../models/especies.interface';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database

export interface EspeciesID extends EspeciesI {id: string;}

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
  private especiesCollection: AngularFirestoreCollection<EspeciesI>;
  especies: Observable<EspeciesID[]>;

  public selected ={
    id: null,
    Tipo_Especie:'',
    Nombre_Especie: '',
    Sexo: '',
  };


  constructor(private readonly afs: AngularFirestore) {
    this.especiesCollection = afs.collection<EspeciesI>('especies');
    this.especies= this.especiesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EspeciesI;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  addEspecies(especies:EspeciesI){
    return this.especiesCollection.add(especies);

  }

//Devuelve todos las especies de nuestra coleccion
  getAllEspecies(){
    return this.especies;
  }

  editEspecies(especies:EspeciesID){

    return this.especiesCollection.doc(especies.id).update(especies);

  }
  //Obtiene el id del dato a eliminar y lo borra de firebase
  deleteEspecies(id: string){
    return this.especiesCollection.doc(id).delete();
  }
}

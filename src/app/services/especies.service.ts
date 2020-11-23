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
  animal$: Observable<EspeciesI[]>;
  vegetal$: Observable<EspeciesI[]>;
  mineral$: Observable<EspeciesI[]>;



  public selected ={
    id: null,
    ID_Especie:'',
    Denom_Cientifica:'',
    Denom_Vulgar:'',
    Tipo_Especie: '',
    Sexo:'',
    Periodo_Celo:'',
    Tipo_Alimentacion:'',
    Alimento_De:'',
    Floracion:'',
    Periodo_Floracion:'',
    Tipo_Mineral:''
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


  getAllEspAnimal() {
    const post  = this.afs.collection('especies', ref => ref.where('Tipo_Especie', '==', 'Animal'));
    return this.animal$ = post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EspeciesID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllEspMineral() {
    const post  = this.afs.collection('especies', ref => ref.where('Tipo_Especie', '==', 'Mineral'));
    return this.animal$ = post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EspeciesID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllEspVegetal() {
    const post  = this.afs.collection('especies', ref => ref.where('Tipo_Especie', '==', 'Vegetal'));
    return this.animal$ = post.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EspeciesID;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VisitantesI } from '../../models/visitantes.interface';

export interface VisitantesID extends VisitantesI{id: string;}

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {
  private visitantesCollection: AngularFirestoreCollection <VisitantesI>;
  visitantes: Observable<VisitantesID[]>;
  public selected ={
    id: null,
    ID_Visitante: 0,
    Nombre_Visitante:'',
    Direccion_Visitante:'',
    Profesion_Visitante: '',
    Activo:'true'
  };

  constructor( private readonly afs:AngularFirestore) {
    this.visitantesCollection = afs.collection<VisitantesI>('visitantes');
    this.visitantes = this.visitantesCollection.snapshotChanges().pipe(
      map( actions => actions.map(a=> {
        const data = a.payload.doc.data() as VisitantesI;
        const id = a.payload.doc.id;
        return {id, ... data};
      }))
    );

  }
    //Metodo agregar
    addVisitante(visitante:VisitantesI){
      return this.visitantesCollection.add(visitante);
  
    }

  //Obtiene todo los elementos
  getAllVisitantes(){
    return this.visitantes;

  }
  //Actualizar datos de visitantes
  editVisitante(visitante: VisitantesID){
    let id= visitante.id;
    return this.visitantesCollection.doc(id).update(visitante);
  }

  //eliminar datos de visitantes
  deleteVisitante(id: string){
    return this.visitantesCollection.doc(id).delete();
  }
}

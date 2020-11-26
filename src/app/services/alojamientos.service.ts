import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { AlojamientoI } from 'src/models/alojamientos.interface';



export interface AlojamientoID extends AlojamientoI{ id: string;}
@Injectable({
  providedIn: 'root'
})
export class AlojamientosService {
  private alojamientoCollection: AngularFirestoreCollection<AlojamientoI>
  alojamientos: Observable<AlojamientoID[]>
  public selected ={
    id: null,
    ID_Alojamiento: '',
    Capacidad: 1,
    Categoria:'',
    Parque: ''
  }

  constructor(private readonly afs: AngularFirestore) {
    this.alojamientoCollection = afs.collection<AlojamientoI>('alojamientos');
    this.alojamientos = this.alojamientoCollection.snapshotChanges().pipe(map(
      actions => actions.map(a=>{
        const data = a.payload.doc.data() as AlojamientoI;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ))
   }

   gelAllAlojamientos(){
     return this.alojamientos;
   }
   editAlojamiento(alojamiento: AlojamientoID){
     return this.alojamientoCollection.doc(alojamiento.id).update(alojamiento);
   }

   deleteAlojamiento(id: string){
     return this.alojamientoCollection.doc(id).delete();
   }
   addAlojamiento(alojamiento: AlojamientoI){
     return this.alojamientoCollection.add(alojamiento);
   }
}

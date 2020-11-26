import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { VisitaI } from 'src/models/visitas.interface';

export interface VisitaID  extends VisitaI{id: string;} 
@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private visitaCollection: AngularFirestoreCollection<VisitaI>
  visitas: Observable<VisitaID[]>
  public selected={
    id: null,
    ID_Parque: '',
    ID_Visitante:''
  }

  constructor(private readonly afs: AngularFirestore) { 
    this.visitaCollection = afs.collection<VisitaI>('visitas');
    this.visitas = this.visitaCollection.snapshotChanges().pipe(map(
      actions => actions.map(a=>{
        const data = a.payload.doc.data() as VisitaI;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ))
   }

   gelAllVisitas(){
     return this.visitas;
   }
   addVisita(visita: VisitaI){
     return this.visitaCollection.add(visita);
   }

  }


import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { AreaI } from 'src/models/areas.interface';

export interface AreaID extends AreaI { id: string;}
@Injectable({
  providedIn: 'root'
})
export class AreasService {
  private areaCollection: AngularFirestoreCollection<AreaI>
  areas: Observable<AreaID[]>
  public selected = {
    id: null,
    ID_Area: '',
    Nombre_Area: '',
    Extension_Area: ''
  }

  constructor(private readonly afs: AngularFirestore) {
    this.areaCollection = afs.collection<AreaI>('areas');
    this.areas = this.areaCollection.snapshotChanges().pipe(map(
      actions => actions.map( a=>{
        const data = a.payload.doc.data() as AreaI;
        const id = a.payload.doc.id;
        return { id, ...data};
      })
    ))
   }

  getAllAreas(){
    return this.areas;
  }
  editArea(area: AreaID){
    return this.areaCollection.doc(area.id).update(area);
  }

  deleteArea(id: string){
    return this.areaCollection.doc(id).delete();
  }
  addArea(area: AreaI){
    return this.areaCollection.add(area);
  }
}

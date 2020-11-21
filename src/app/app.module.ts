import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';


// lists
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { ListVisitantesComponent } from './components/list-visitantes/list-visitantes.component';
import { ListEspeciesComponent } from './components/list-especies/list-especies.component';


//services
import { ParquesService } from './services/parques.service';
import { EmpleadosService } from './services/empleados.service';
import { VisitantesService } from  './services/visitantes.service';
import { EspeciesService } from  './services/especies.service';
import { AreasService } from './services/areas.service';

//forms
import { FormParquesComponent } from './components/form-parques/form-parques.component';
import { FormEmpleadosComponent} from './components/form-empleados/form-empleados.component';
import { FormEspeciesComponent} from './components/form-especies/form-especies.component';
import { FormVisitantesComponent } from './components/form-visitantes/form-visitantes.component';


//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { SidenComponent } from './siden/siden.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { FormAreasComponent } from './components/form-areas/form-areas.component';




@NgModule({
  declarations: [
    AppComponent,
    ListParquesComponent,
    ListEmpleadosComponent,
    ListVisitantesComponent,
    ListEspeciesComponent,
    FormParquesComponent,
    FormEmpleadosComponent,
    FormEspeciesComponent,
    FormVisitantesComponent,
    SidenComponent,
    ListAreasComponent,
    FormAreasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    MatModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    ReactiveFormsModule
  ],
  providers: [
    ParquesService,
    EmpleadosService,
    VisitantesService,
    EspeciesService,
    AreasService
  ],

  bootstrap: [AppComponent],
  entryComponents:[
    FormParquesComponent,
    FormEmpleadosComponent,
    FormEspeciesComponent,
    FormVisitantesComponent,
    FormAreasComponent
] //Controla donde se muestra el componente
})
export class AppModule {}

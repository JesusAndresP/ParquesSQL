import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './toolbar/toolbar.component';



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




@NgModule({
  declarations: [
    AppComponent,
    ListParquesComponent,
    ListEmpleadosComponent,
    ListVisitantesComponent,
    ListEspeciesComponent,
    MainNavComponent,
    ToolbarComponent,
    FormParquesComponent,
    FormEmpleadosComponent,
    FormEspeciesComponent,
    FormVisitantesComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [ParquesService,EmpleadosService,VisitantesService,EspeciesService],

  bootstrap: [AppComponent],
  entryComponents:[FormParquesComponent,FormEmpleadosComponent,FormEspeciesComponent,FormVisitantesComponent] //Controla donde se muestra el componente
})
export class AppModule {}

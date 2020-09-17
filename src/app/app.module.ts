import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ParquesService } from './services/parques.service';
//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    ListParquesComponent,
    FormComponent,
    MainNavComponent
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
    MatListModule
  ],
  providers: [ParquesService],
  bootstrap: [AppComponent],
  entryComponents:[FormComponent] //Controla donde se muestra el componente
})
export class AppModule {}

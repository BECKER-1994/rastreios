import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmpresasModule } from './empresas/empresas.module';
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment} from 'src/environments/environment';
import { OnibusModule } from './onibus/onibus.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    EmpresasModule,
    OnibusModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

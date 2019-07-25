import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';

import { OrdersService } from "./shared/orders.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "src/environments/environment";
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AgmCoreModule } from "@agm/core";
import { TestcComponent } from './testc/testc.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent,
    GoogleMapsComponent,
    TestcComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey:environment.googleMapskey,
      libraries:["places"]
    })
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

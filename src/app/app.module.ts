import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {getApp, initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { environment } from '../environments/environment';
import {provideAuth, getAuth, connectAuthEmulator} from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  Firestore,
  initializeFirestore,
  connectFirestoreEmulator
} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      let auth = getAuth();
      if(environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true
        })
      }
      return auth;
    }),
    provideFirestore(() => {
      let firestore: Firestore;
      if(environment.useEmulators) {
        // Note: long polling will be required for Cypress
        firestore = initializeFirestore(getApp(), {
          experimentalForceLongPolling: true
        });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      else {
        firestore = getFirestore();
      }

      return firestore;
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

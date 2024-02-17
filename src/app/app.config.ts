import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-9dfc5","appId":"1:886606422797:web:52061c60bd62c7f0ab4644","storageBucket":"simple-crm-9dfc5.appspot.com","apiKey":"AIzaSyCwVAxsf-4AbLz_hlQFGwhu859n3yHRV_g","authDomain":"simple-crm-9dfc5.firebaseapp.com","messagingSenderId":"886606422797"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

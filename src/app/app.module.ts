import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ImagePicker } from '@ionic-native/image-picker';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { EventoPage } from '../pages/evento/evento';
import { NuevoEventoPage } from '../pages/nuevo-evento/nuevo-evento';

import { RecordarPage } from '../pages/recordar/recordar';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { RegistroPage } from '../pages/registro/registro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    BienvenidaPage,
    RecordarPage,
    RegistroPage,
    EventoPage,
    NuevoEventoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    BienvenidaPage,
    RecordarPage,
    RegistroPage,
    EventoPage,
    NuevoEventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    Geolocation,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}

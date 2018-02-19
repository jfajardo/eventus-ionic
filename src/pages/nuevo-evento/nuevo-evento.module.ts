import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoEventoPage } from './nuevo-evento';

@NgModule({
  declarations: [
    NuevoEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoEventoPage),
  ],
})
export class NuevoEventoPageModule {}

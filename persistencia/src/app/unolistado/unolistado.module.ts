import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnolistadoPageRoutingModule } from './unolistado-routing.module';

import { UnolistadoPage } from './unolistado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnolistadoPageRoutingModule
  ],
  declarations: [UnolistadoPage]
})
export class UnolistadoPageModule {}

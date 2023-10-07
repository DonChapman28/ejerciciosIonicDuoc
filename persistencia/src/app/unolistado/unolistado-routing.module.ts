import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnolistadoPage } from './unolistado.page';

const routes: Routes = [
  {
    path: '',
    component: UnolistadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnolistadoPageRoutingModule {}

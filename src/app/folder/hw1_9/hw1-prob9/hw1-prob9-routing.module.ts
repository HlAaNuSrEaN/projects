import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1Prob9Page } from './hw1-prob9.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1Prob9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1Prob9PageRoutingModule {}

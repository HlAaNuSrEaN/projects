import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1Prob12Page } from './hw1-prob12.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1Prob12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1Prob12PageRoutingModule {}

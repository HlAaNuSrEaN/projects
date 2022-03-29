import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1Prob9PageRoutingModule } from './hw1-prob9-routing.module';

import { Hw1Prob9Page } from './hw1-prob9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1Prob9PageRoutingModule
  ],
  declarations: [Hw1Prob9Page]
})
export class Hw1Prob9PageModule {}

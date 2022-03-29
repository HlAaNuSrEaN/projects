import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1Prob12PageRoutingModule } from './hw1-prob12-routing.module';

import { Hw1Prob12Page } from './hw1-prob12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1Prob12PageRoutingModule
  ],
  declarations: [Hw1Prob12Page]
})
export class Hw1Prob12PageModule {}

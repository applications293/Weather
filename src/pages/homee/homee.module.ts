import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeePage } from './homee';

@NgModule({
  declarations: [
    HomeePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeePage),
  ],
})
export class HomeePageModule {}

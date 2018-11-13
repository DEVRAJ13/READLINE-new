import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSubjectPopupPage } from './add-subject-popup';

@NgModule({
  declarations: [
    AddSubjectPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSubjectPopupPage),
  ],
})
export class AddSubjectPopupPageModule {}

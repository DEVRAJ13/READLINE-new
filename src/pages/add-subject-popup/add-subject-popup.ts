import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddSubjectPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-subject-popup',
  templateUrl: 'add-subject-popup.html',
})
export class AddSubjectPopupPage {
  form : FormGroup;

   // Validation error messages that will be displayed for each form field with errors.
   validation_messages = {
    'myField': [
    { type: 'pattern', message: 'Please enter a number like 12345678/00.' }
  ]
}

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    console.log('UserId', navParams.get('userId'));

      // Create the form and define fields and validators.
      this.form = this.formBuilder.group({
        myField: ['', Validators.pattern('[0-9]{8}/[0-9]{2}')]
    });

    // Initial value for the field.
    this.form.get('myField').setValue('11223344/55');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSubjectPopupPage');
  }

  save() {
    if (this.form.valid) {
        // Save your values, using this.form.get('myField').value;
    }
  }

  closeDialog(){
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}

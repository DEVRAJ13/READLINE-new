import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log('UserId', navParams.get('userId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSubjectPopupPage');
  }

  closeDialog(){
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  description:any;
  imp_notes:any;
  imp_points:any;
  introduction:any;
  notes:any;
  topic_images:any;
  title:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get("data_obj"));
    this.description = this.navParams.get("data_obj").description;
    this.imp_notes = this.navParams.get("data_obj").final_notes;
    this.imp_points = this.navParams.get("data_obj").important_points;

    this.introduction = this.navParams.get("data_obj").introduction;
    this.notes = this.navParams.get("data_obj").notes;
    this.topic_images = this.navParams.get("data_obj").topic_images;
    this.title = this.navParams.get("data_obj").title;
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  topic_lists:any;
  all_list_content:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   console.log(this.navParams.get("data_obj"));
   this.topic_lists = this.navParams.get("data_obj");
   this.all_list_content = this.topic_lists.content.topic;
  }

  jumpToDetail(obj){
    this.navCtrl.push("DetailPage",{
      data_obj:obj
    })
  }

}

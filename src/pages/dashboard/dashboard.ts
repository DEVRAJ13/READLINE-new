import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  data: any;
  descriptionArr:any = [];

  mydata:any = [{
      "topic": [
        {
          "title":"",
          "description": [],
          "final_notes": "",
          "important_points": [],
          "introduction": "hi there",
          "notes": "sdfgihskghihgiehrgioheriohgpiergpierhioehgioheiohgohfgh",
          "topic_images":[
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ]
      }]
    },{
      "topic": [
        {
          "title":"",
          "description": [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
          "final_notes": "skhlkshlkhsklglkhlhsgilhilhgljfg;lghierhgpiherpiheprihpireh",
          "important_points": [
            "sfgjgjlierhierihorehiltheroihioerhoe",
            "ufgushioerhoheriohioepioeohoiheorihoe",
            "sdghksjhfkshghrg",
            "eklgkhuuehuiore"
          ],
          "introduction": "hi there",
          "notes": "sdfgihskghihgiehrgioheriohgpiergpierhioehgioheiohgohfgh",
          "topic_images":[
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ]
      }]
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore) {
  }

  getAllPosts(): Observable<any> {
    return this.db.collection<any>("subjects").valueChanges();
  }

  ionViewDidLoad() {
    this.getAllPosts().subscribe((data) => {
      this.data = data;
      console.log("MYDATA", data);
    });
  }

  sendData(obj, img){
   console.log("listing topics", obj.content);
   this.navCtrl.push("ListPage",{
     data_obj: obj ,
     image: img
   });
  }

  addData() {
    this.db.collection('subjects').add({
      'author': "kjdsgjksgjkjkf",
      'branch': "sjdhjksgjksfgdjk",
      'content': this.mydata,
      'course': "jksdgsdgsd",
      'image_url': "klshdkjsd",
      'source': "sjkgjksgdkgsf",
      'subject_name': "iosdyhfjksdgf"
    });
  }

}

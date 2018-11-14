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

interface Post {
  description: string;
  ingredients: string;
  item_image: string;
  nutrition_facts: string;
  time_est: string;
  time_title: string;
  total_time: string;
  item_name: string;
}

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  data: any;
  

  mydata:any = [{
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
    // this.postsCol = db.collection('recipes');
    // this.posts = this.postsCol.valueChanges();

    this.getAllPosts().subscribe((data) => {
      this.data = data;
      console.log("MYDATA", data);
    });

  }

  getAllPosts(): Observable<any> {
    return this.db.collection<any>("subjects").valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

  //  this.addData();
  }

  sendData(obj){
   console.log("listing topics", obj.content);
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

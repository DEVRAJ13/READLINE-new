import { Component, ViewChild, ElementRef,Renderer} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';


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
  @ViewChild(Content) content: Content;
  start = 0;
  threshold = 100;
  slideHeaderPrevious = 0;
  ionScroll:any;
  showheader:boolean;
  hideheader:boolean;
  headercontent:any;


  description:any;
  imp_notes:any;
  imp_points:any;
  introduction:any;
  notes:any;
  topic_images:any;
  title:any;
  image_url:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer ,public myElement: ElementRef) {
  }

  ngOnInit() {
    // Ionic scroll element
    this.ionScroll = this.myElement.nativeElement.getElementsByClassName("scroll-content")[0];
    // On scroll function
    this.ionScroll.addEventListener("scroll", () => {
    if(this.ionScroll.scrollTop - this.start > this.threshold) {
    this.showheader =true;
    this.hideheader = false;
    } else {
    this.showheader =false;
    this.hideheader = true;
    }
    if (this.slideHeaderPrevious >= this.ionScroll.scrollTop - this.start) {
    this.showheader =false;
    this.hideheader = true;
    }
    this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
    });
    }

  ionViewDidLoad() {
    this.image_url = this.navParams.get("image");
    console.log( this.image_url);
    this.description = this.navParams.get("data_obj").description;
    this.imp_notes = this.navParams.get("data_obj").final_notes;
    this.imp_points = this.navParams.get("data_obj").important_points;

    this.introduction = this.navParams.get("data_obj").introduction;
    this.notes = this.navParams.get("data_obj").notes;
    this.topic_images = this.navParams.get("data_obj").topic_images;
    this.title = this.navParams.get("data_obj").title;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  totalWords = 0;
  constructor(){
    // setTimeout(() => {
    //   this.title = "The Will Will Web";
    // }, 2000);
  }
  changeTitle(altKey:boolean){
    if(altKey){
      this.title = "The Will Will Web";
    }
  }
  calcWords($event:any){
    // console.log($event);
    this.totalWords = $event.target.value.length;
  }
  clearnWords($event:any){
    // console.log($event);
    if($event.key == "Escape"){
      $event.target.value = "";
      this.totalWords = $event.target.value.length;
    }
  }
}

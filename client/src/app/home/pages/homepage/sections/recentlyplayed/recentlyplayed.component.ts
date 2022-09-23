import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recentlyplayed',
  templateUrl: './recentlyplayed.component.html',
  styleUrls: ['./recentlyplayed.component.scss']
})
export class RecentlyplayedComponent implements OnInit {
  // songs!: any[];
  // cards!: any[];

  myRecent : any[]  = []

  constructor(private _apiservice : ApiService,private _route : Router) { }

  ngOnInit(): void {
    // this.array()
    this._apiservice.getRecentlyPlayed().subscribe(
      (response)=>{
        console.log(response)
        this.myRecent.push(response)
        console.log(this.myRecent.length)
      }
    )

  }


// array(){
//   this.songs=[
//     { 
//       heading:'Shows to try',
//       subheader: `Podcasts we think you'ii get hooked on.`
//      },
//     {
//       heading:'Stress free ambient'   
//     },
//   ]
//   this.cards=[
//     {
//       img: 'assets/img/song1.png',
//       songtitle: 'First Day Back',
//       bandname: 'Stitcher and Tally Abecassis'
//     },
//     {
//       img: 'assets/img/song2.png',
//       songtitle: 'Resistance',
//       bandname: 'Gimlet'
//     },
//     {
//       img: 'assets/img/song3.png',
//       songtitle: 'In the Dark',
//       bandname: 'APM Reports'
//     },
//     {
//       img: 'assets/img/song4.png',
//       songtitle: 'Natal',
//       bandname: 'The Woodshadow, You Had Me at Blacl'
//     },
//   ] 
// }


}

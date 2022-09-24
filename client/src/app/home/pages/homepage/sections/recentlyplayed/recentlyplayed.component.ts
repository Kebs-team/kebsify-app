import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recentlyplayed',
  templateUrl: './recentlyplayed.component.html',
  styleUrls: ['./recentlyplayed.component.scss']
})
export class RecentlyplayedComponent implements OnInit {
  data : any[] = []
  myRecent : any[]  = []


  constructor(private _apiservice : ApiService,private _route : Router) { }

  ngOnInit(): void {
    this._apiservice.getRecentlyPlayed().subscribe(
      (response)=>{
        this.data.push(response)
        for (let index = 0; index < this.data[0].length; index++) {
          if (this.myRecent.filter(e => e.track.album.name === this.data[0][index].track.album.name).length == 0) {
            this.myRecent.push(this.data[0][index])
          }
        }
        console.log(this.myRecent)
      }
    )
  }

}
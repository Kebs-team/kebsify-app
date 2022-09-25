import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ssongs',
  templateUrl: './ssongs.component.html',
  styleUrls: ['./ssongs.component.scss']
})
export class SsongsComponent implements OnInit {

  constructor(private _apiservice : ApiService, private _route : Router) { }

  trackLists : any[]  = []


  ngOnInit(): void {
    this._apiservice.getSearchTrack('Anirudh').subscribe(
      (response)=>{
        console.log("Track data : ",response)
        this.trackLists.push(response)
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-splaylist',
  templateUrl: './splaylist.component.html',
  styleUrls: ['./splaylist.component.scss']
})
export class SplaylistComponent implements OnInit {

  constructor(private _apiservice : ApiService, private _route : Router) { }

  playistLists : any[]  = []


  ngOnInit(): void {
    this._apiservice.getPlayListByName('Anirudh').subscribe(
      (response)=>{
        console.log("playlist data : ",response)
        this.playistLists.push(response)
      }
    )
  }

}

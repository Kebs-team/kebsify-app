import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sartists',
  templateUrl: './sartists.component.html',
  styleUrls: ['./sartists.component.scss']
})
export class SartistsComponent implements OnInit {

  constructor(private _apiservice : ApiService,private _route : Router) { }

  artistLists : any[]  = []


  ngOnInit(): void {
    this._apiservice.getSearchArtist('Anirudh').subscribe(
      (response)=>{
        console.log("artist data : ",response)
        this.artistLists.push(response)
      }
    )
  }

}

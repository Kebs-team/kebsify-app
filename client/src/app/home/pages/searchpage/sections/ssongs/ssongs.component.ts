import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HomeService } from '../../../home.service';

@Component({
  selector: 'app-ssongs',
  templateUrl: './ssongs.component.html',
  styleUrls: ['./ssongs.component.scss']
})
export class SsongsComponent implements OnInit {
  data : any
  input = ''
  constructor(private _apiservice : ApiService, private _router : Router,private _route: ActivatedRoute,private _homeservice : HomeService) { }

  trackLists : any[]  = []


  ngOnInit(): void {
   this._route.params.subscribe(
    (data) => {
      this.data = data
      this.input = this.data.input
    }
   )
    this._apiservice.getSearchTrack(this.input).subscribe(
      (response)=>{
        console.log("Track data : ",response)
        this.trackLists.push(response)
      }
    )
  }

  onPlay = (pos:number) => {
     this._homeservice.setTrack(this.trackLists[0][pos].uri)
  }
}

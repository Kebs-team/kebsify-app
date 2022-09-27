import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-splaylist',
  templateUrl: './splaylist.component.html',
  styleUrls: ['./splaylist.component.scss']
})
export class SplaylistComponent implements OnInit {
  input = ''
  data : any
  constructor(private _apiservice : ApiService,private _route: ActivatedRoute) { }

  playistLists : any[]  = []


  ngOnInit(): void {

    this._route.params.subscribe(
      (data) => {
        this.data = data
        this.input = this.data.input
      }
     )
    this._apiservice.getPlayListByName(this.input).subscribe(
      (response)=>{
        console.log("playlist data : ",response)
        this.playistLists.push(response)
      }
    )
  }

}

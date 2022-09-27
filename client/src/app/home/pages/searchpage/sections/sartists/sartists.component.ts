import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sartists',
  templateUrl: './sartists.component.html',
  styleUrls: ['./sartists.component.scss']
})
export class SartistsComponent implements OnInit {

 

  artistLists : any[]  = []


  input = ''
  data : any
  constructor(private _apiservice : ApiService,private _router: ActivatedRoute) { }

  playistLists : any[]  = []


  ngOnInit(): void {

    this._router.params.subscribe(
      (data) => {
        this.data = data
        this.input = this.data.input
      }
     )
    const newLocal = this;
    newLocal._apiservice.getSearchArtist(this.input).subscribe(
      (response)=>{
        console.log("artist data : ",response)
        this.artistLists.push(response)
      }
    )
  }

}

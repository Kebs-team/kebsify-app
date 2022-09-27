import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {

  isartist = false
  isplaylist = false
  issongs = false

  constructor(private _router : Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  onSongs(){
  this.issongs = !this.issongs
  this.isplaylist = false
  this.isartist = false
   this._router.navigate(['songs'],{ relativeTo: this._route })
  }

  onPlaylist(){
    this.issongs = false
    this.isplaylist = !this.isplaylist
    this.isartist = false
    this._router.navigate(['playlist'],{ relativeTo: this._route })
   }

   onArtist(){
    this.issongs = false
    this.isplaylist = false
    this.isartist = !this.isartist
    this._router.navigate(['artist'],{ relativeTo: this._route })
   }
}

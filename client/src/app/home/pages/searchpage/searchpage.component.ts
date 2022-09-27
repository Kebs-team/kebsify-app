import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
  searchInput = ''
  isartist = false
  isplaylist = false
  issongs = false

  constructor(private _router : Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  onSongs(){
  this.issongs = true
  this.isplaylist = false
  this.isartist = false
   this._router.navigate(['songs',this.searchInput],{ relativeTo: this._route })
  }

  onPlaylist(){
    this.issongs = false
    this.isplaylist = true
    this.isartist = false
    this._router.navigate(['playlist',this.searchInput],{ relativeTo: this._route })
   }

   onArtist(){
    this.issongs = false
    this.isplaylist = false
    this.isartist = true
    this._router.navigate(['artist',this.searchInput],{ relativeTo: this._route })
   }
}

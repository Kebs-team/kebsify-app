import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DialogOverviewExampleDialog } from './sections/Dialogue/createplaylist.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  profile_data : any
  name! : string
  playListName!: string;
  Description!: string;
  myPlaylist : any[]  = []
  constructor(private _apiservice : ApiService,private _route : Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this._apiservice.getMe().subscribe(
      (response) => {
        console.log("Response is : ",response)
        this.profile_data = response
        this.name = this.profile_data.display_name
      }
    )
    this._apiservice.getPlayList().subscribe(
      (response)=>{
        console.log(response)
        this.myPlaylist.push(response)
        console.log(this.myPlaylist.length)
      }
    )
  }

  onCreatePlayList = () => {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {playListName: this.playListName, Description : this.Description},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.myPlaylist.push(result)
      this._apiservice.createPlayList({
        "playlist_name":result.playListName,
        "description": result.Description,
        "publicmode":"true"
     }).subscribe(
      (response)=>{
        this._apiservice.getPlayList().subscribe(
          (response)=>{
            console.log(response)
            this.myPlaylist.splice(0)
            this.myPlaylist.push(response)
          }
        )
      }
     )
    });
  }
  }




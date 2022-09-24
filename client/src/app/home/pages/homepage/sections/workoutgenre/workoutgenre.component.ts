import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-workoutgenre',
  templateUrl: './workoutgenre.component.html',
  styleUrls: ['./workoutgenre.component.scss']
})
export class WorkoutgenreComponent implements OnInit {
  workOut : any[]  = []
  instrumental : any[]  = []
  Chillout : any[]  = []



  constructor(private _apiservice : ApiService,private _route : Router) { }

  ngOnInit(): void {
    this._apiservice.getPlayListByName('work').subscribe(
      (response)=>{
        console.log("workout data : ",response)
        this.workOut.push(response)
      }
    )

    this._apiservice.getPlayListByName('instrumental').subscribe(
      (response)=>{
        console.log("Instrumental data : ",response)
        this.instrumental.push(response)
      }
    )

    this._apiservice.getPlayListByName('Chill').subscribe(
      (response)=>{
        console.log("Chill data : ",response)
        this.Chillout.push(response)
      }
    )
  }


}
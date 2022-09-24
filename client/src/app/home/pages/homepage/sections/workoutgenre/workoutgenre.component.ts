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


  constructor(private _apiservice : ApiService,private _route : Router) { }

  ngOnInit(): void {
    this._apiservice.getPlayListByName('work').subscribe(
      (response)=>{
        console.log("workout data : ",response)
        this.workOut.push(response)
      }
    )
  }

}

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
  track = 'spotify:track:01bXxpjsD4ARa6ZOP8dmLY'
  trackSubject = new Subject()

  setTrack = (trackUri:string) => {
    this.track = trackUri
    this.trackSubject.next(0)
  }
}
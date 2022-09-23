import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private _httpclient : HttpClient ){
    }
    
    getMe = () => {
        return this._httpclient.get('/api/profile')
    }

    getPlayList = () => {
        return this._httpclient.get('/api/userplaylist')
    }

    getRecentlyPlayed = () => {
        return this._httpclient.get('/api/recentlyplayedtracks')
    }
    
    createPlayList = (body:any) => {
        return this._httpclient.post('/api/createplaylist',body)
    }

}
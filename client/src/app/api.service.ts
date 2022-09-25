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
    
    getPlayListByName = (playlistname : String) => {
        return this._httpclient.get('/api/searchplaylist/'+playlistname+'')
    }
    
    getSearchArtist = (artistname : String) => {
        return this._httpclient.get('/api/searchartist/'+artistname+'')
    }
    
    getSearchTrack = (trackname : String) => {
        return this._httpclient.get('/api/searchtracks/'+trackname+'')
    }

    createPlayList = (body:any) => {
        return this._httpclient.post('/api/createplaylist',body)
    }



    
}
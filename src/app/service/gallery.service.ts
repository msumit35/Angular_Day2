import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GalleryService
{
    constructor(private _http: Http){

    }
    getPhotos(){
        return this._http.get('/src/json/photo-gallery.json');
    }
}
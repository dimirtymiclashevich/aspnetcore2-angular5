import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';

@Injectable()
export class DataService {

    private url = "/api/albums";

    constructor(private http: HttpClient) {
    }

    getAlbums() {
        return this.http.get(this.url);
    }

    createProduct(album: Album) {
        return this.http.post(this.url, album);
    }

    updateAlbum(album: Album) {

        return this.http.put(this.url + '/' + album.id, album);
    }

    deleteAlbum(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
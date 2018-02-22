import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Album } from './album';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    selectedAlbum: Album = new Album();   
    albums: Album[];                
    tableMode: boolean = true;         

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadAlbums();   
    }
   
    loadAlbums() {
        this.dataService.getAlbums()
            .subscribe((data: Album[]) => this.albums = data);
    }

    save() {
        if (this.selectedAlbum.id == null) {
            this.dataService.createProduct(this.selectedAlbum)
                .subscribe((data: Album) => this.albums.push(data));
        } else {
            this.dataService.updateAlbum(this.selectedAlbum)
                .subscribe(data => this.loadAlbums());
        }
        this.cancel();
    }

    editAlbum(a: Album) {
        this.selectedAlbum = a;
    }

    cancel() {
        this.selectedAlbum = new Album();
        this.tableMode = true;
    }

    delete(a: Album) {
        this.dataService.deleteAlbum(a.id)
            .subscribe(data => this.loadAlbums());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Album } from './album';
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.selectedAlbum = new Album();
        this.tableMode = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadAlbums();
    };
    AppComponent.prototype.loadAlbums = function () {
        var _this = this;
        this.dataService.getAlbums()
            .subscribe(function (data) { return _this.albums = data; });
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.selectedAlbum.id == null) {
            this.dataService.createProduct(this.selectedAlbum)
                .subscribe(function (data) { return _this.albums.push(data); });
        }
        else {
            this.dataService.updateAlbum(this.selectedAlbum)
                .subscribe(function (data) { return _this.loadAlbums(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editAlbum = function (a) {
        this.selectedAlbum = a;
    };
    AppComponent.prototype.cancel = function () {
        this.selectedAlbum = new Album();
        this.tableMode = true;
    };
    AppComponent.prototype.delete = function (a) {
        var _this = this;
        this.dataService.deleteAlbum(a.id)
            .subscribe(function (data) { return _this.loadAlbums(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        providers: [DataService]
    }),
    __metadata("design:paramtypes", [DataService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
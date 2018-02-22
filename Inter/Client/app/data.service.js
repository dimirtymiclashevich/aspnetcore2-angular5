var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/albums";
    }
    DataService.prototype.getAlbums = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.createProduct = function (album) {
        return this.http.post(this.url, album);
    };
    DataService.prototype.updateAlbum = function (album) {
        return this.http.put(this.url + '/' + album.id, album);
    };
    DataService.prototype.deleteAlbum = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    return DataService;
}());
DataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map
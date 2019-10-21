import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAsset } from '../asset/asset';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AssetService {

    private assetDataUrl = 'http://localhost:62677/api/asset/';  // URL to web api

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private _http: Http) { }
    getAssets(): Observable<IAsset[]> {
        return this._http.get(this.assetDataUrl).map((response: Response) => <IAsset[]>response.json());
    }

    getAssetsbyID(id: number): Observable<IAsset> {
        return this._http.get(this.assetDataUrl + id).map((response: Response) => <IAsset>response.json());
    }

    updateAsset(asset: IAsset): Observable<any> {
        return this._http.put(this.assetDataUrl, asset).map((response: Response) => <any>response.json());
    }
}

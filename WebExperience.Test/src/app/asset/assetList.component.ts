import { Component, OnInit } from '@angular/core';
import { IAsset } from '../asset/Asset';
import { AssetService } from './asset.service';

@Component({
    selector: 'app-assetList',
    templateUrl: 'app/Asset/assetList.component.html',
    styleUrls: ['app/Asset/assetList.component.css'],
    providers: [AssetService],
})

export class AssetListComponent implements OnInit {
    assets: IAsset[];

    constructor(private _assetService: AssetService) {
       
    }

    ngOnInit() {
        this._assetService.getAssets().subscribe((assetData) => this.assets = assetData);
    }    
}
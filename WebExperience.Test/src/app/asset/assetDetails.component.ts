import { Component, OnInit, Input } from '@angular/core';
import { IAsset } from '../asset/Asset';
import { AssetService } from './asset.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-assetDetails',
    templateUrl: 'app/Asset/assetDetails.component.html',
    styleUrls: ['app/Asset/assetDetails.component.css'],
    providers: [AssetService],
})

export class AssetDetailsComponent implements OnInit {
    @Input() asset: IAsset;

    constructor(private _assetService: AssetService, private _route: ActivatedRoute, private _location: Location) {

    }

    ngOnInit() {
        const id = +this._route.snapshot.paramMap.get('id');
        this._assetService.getAssetsbyID(id).subscribe((assetData) => this.asset = assetData);
    }

    goBack(): void {
        this._location.back();
    }

    save(): void {
        this._assetService.updateAsset(this.asset).subscribe((assetData) => this.asset = assetData);
    }
}
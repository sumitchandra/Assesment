"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var asset_service_1 = require("./asset.service");
var AssetListComponent = /** @class */ (function () {
    function AssetListComponent(_assetService) {
        this._assetService = _assetService;
    }
    AssetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._assetService.getAssets().subscribe(function (assetData) { return _this.assets = assetData; });
    };
    AssetListComponent = __decorate([
        core_1.Component({
            selector: 'app-assetList',
            templateUrl: 'app/Asset/assetList.component.html',
            styleUrls: ['app/Asset/assetList.component.css'],
            providers: [asset_service_1.AssetService],
        }),
        __metadata("design:paramtypes", [asset_service_1.AssetService])
    ], AssetListComponent);
    return AssetListComponent;
}());
exports.AssetListComponent = AssetListComponent;
//# sourceMappingURL=assetList.component.js.map
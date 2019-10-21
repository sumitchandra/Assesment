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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var AssetDetailsComponent = /** @class */ (function () {
    function AssetDetailsComponent(_assetService, _route, _location) {
        this._assetService = _assetService;
        this._route = _route;
        this._location = _location;
    }
    AssetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.paramMap.get('id');
        this._assetService.getAssetsbyID(id).subscribe(function (assetData) { return _this.asset = assetData; });
    };
    AssetDetailsComponent.prototype.goBack = function () {
        this._location.back();
    };
    AssetDetailsComponent.prototype.save = function () {
        var _this = this;
        this._assetService.updateAsset(this.asset).subscribe(function (assetData) { return _this.asset = assetData; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AssetDetailsComponent.prototype, "asset", void 0);
    AssetDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-assetDetails',
            templateUrl: 'app/Asset/assetDetails.component.html',
            styleUrls: ['app/Asset/assetDetails.component.css'],
            providers: [asset_service_1.AssetService],
        }),
        __metadata("design:paramtypes", [asset_service_1.AssetService, router_1.ActivatedRoute, common_1.Location])
    ], AssetDetailsComponent);
    return AssetDetailsComponent;
}());
exports.AssetDetailsComponent = AssetDetailsComponent;
//# sourceMappingURL=assetDetails.component.js.map
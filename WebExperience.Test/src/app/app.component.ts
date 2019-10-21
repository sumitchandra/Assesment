import { Component } from '@angular/core';
import { AssetListComponent } from '../app/asset/assetList.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Asset List';
}

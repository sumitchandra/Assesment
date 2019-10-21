import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetListComponent } from '../app/asset/assetList.component';
import { AssetDetailsComponent } from '../app/asset/assetDetails.component';

const routes: Routes = [
    { path: 'assetList', component: AssetListComponent },
    { path: 'detail/:id', component: AssetDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { AssetListComponent } from '../app/asset/assetList.component';
import { AssetDetailsComponent } from '../app/asset/assetDetails.component';
import { MessagesComponent } from '../app/asset/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, HttpModule, AppRoutingModule],
    declarations: [AppComponent, AssetListComponent, AssetDetailsComponent, MessagesComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

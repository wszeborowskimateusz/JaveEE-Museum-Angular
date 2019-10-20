import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './component/app/app.component';
import {AppRoutingModule} from './app-routing-module';

import {CuratorViewComponent} from './component/curator-view/curator-view.component';
import {CuratorListComponent} from './component/curator-list/curator-list.component';
import {CuratorService} from './service/curator-service';
import {CuratorEditComponent} from './component/curator-edit/curator-edit.component';
import {ExhibitService} from './service/exhibit-service';
import {ExhibitListComponent} from './component/exhibit-list/exhibit-list.component';
import {ExhibitViewComponent} from './component/exhibit-view/exhibit-view.component';
import {ExhibitEditComponent} from './component/exhibit-edit/exhibit-edit.component';
import {MuseumService} from './service/museum-service';
import {MuseumListComponent} from './component/museum-list/museum-list.component';
import {MuseumViewComponent} from './component/museum-view/museum-view.component';
import {MuseumEditComponent} from './component/museum-edit/museum-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CuratorViewComponent,
    CuratorListComponent,
    CuratorEditComponent,
    ExhibitListComponent,
    ExhibitViewComponent,
    ExhibitEditComponent,
    MuseumListComponent,
    MuseumViewComponent,
    MuseumEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CuratorService,
    ExhibitService,
    MuseumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

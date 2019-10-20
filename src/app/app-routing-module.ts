import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {CuratorListComponent} from './component/curator-list/curator-list.component';
import {CuratorViewComponent} from './component/curator-view/curator-view.component';
import {CuratorEditComponent} from './component/curator-edit/curator-edit.component';
import {ExhibitListComponent} from './component/exhibit-list/exhibit-list.component';
import {ExhibitEditComponent} from './component/exhibit-edit/exhibit-edit.component';
import {ExhibitViewComponent} from './component/exhibit-view/exhibit-view.component';
import {MuseumListComponent} from './component/museum-list/museum-list.component';
import {MuseumEditComponent} from './component/museum-edit/museum-edit.component';
import {MuseumViewComponent} from './component/museum-view/museum-view.component';

const routes: Routes = [
  {path: 'curators', component: CuratorListComponent},
  {path: 'curators/create', component: CuratorEditComponent},
  {path: 'curators/:id', component: CuratorViewComponent},
  {path: 'curators/:id/edit', component: CuratorEditComponent},

  {path: 'exhibits', component: ExhibitListComponent},
  {path: 'exhibits/create', component: ExhibitEditComponent},
  {path: 'exhibits/:id', component: ExhibitViewComponent},
  {path: 'exhibits/:id/edit', component: ExhibitEditComponent},

  {path: 'museums', component: MuseumListComponent},
  {path: 'museums/create', component: MuseumEditComponent},
  {path: 'museums/:id', component: MuseumViewComponent},
  {path: 'museums/:id/edit', component: MuseumEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotesListingComponent} from './components/notes-listing/notes-listing.component'
import {NotesViewEditComponent} from './components/notes-view-edit/notes-view-edit.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: NotesListingComponent,
  },
  {
    path: 'new',
    component: NotesViewEditComponent,
  },
  {
    path: 'detail/:id',
    component: NotesViewEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { NotesListingComponent } from './components/notes-listing/notes-listing.component';
import { NotesViewEditComponent } from './components/notes-view-edit/notes-view-edit.component';

import {NotesRoutingModule} from './notes.routing.module'

import {CoreModule} from '../../core/core.module'


@NgModule({
  declarations: [NotesListingComponent, NotesViewEditComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    CoreModule
  ]
})
export class NotesModule { }

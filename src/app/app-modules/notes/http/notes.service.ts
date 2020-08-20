import { Injectable } from '@angular/core';

import { BaseService } from '../../../core/http/base.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private BaseService: BaseService) {}

  getAllNotes(params) {
      const subURL='/notes'
    return this.BaseService.GET(subURL,params);
  } 

  createNote(payload){
    const subURL='/note'
    return this.BaseService.POST(subURL,payload,true);
  }

  getNoteById(id){
    const subURL=`/notes/${id}`
    return this.BaseService.GET(subURL,{});
  }

  updateNote(id,payload){
    const subURL=`/notes/${id}`
    return this.BaseService.PUT(subURL,payload);
  }

  deleteNote(id){
    const subURL=`/notes/${id}`
    return this.BaseService.DELETE(subURL);
  }
}
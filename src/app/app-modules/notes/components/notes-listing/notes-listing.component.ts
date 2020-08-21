import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../http/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-listing',
  templateUrl: './notes-listing.component.html',
  styleUrls: ['./notes-listing.component.scss'],
})
export class NotesListingComponent implements OnInit {
  constructor(private notesService: NotesService, private router: Router) {
    
  }
  notes: any = [];
  previousPage: number = 1;
  total: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;
  getAllNotes() {
    let payload = { page: 1, limit: 10 };
    payload.page = this.pageNumber;
    this.notesService.getAllNotes(payload).subscribe((res) => {
      this.notes = res['notes'];
      this.total = res['TotalCount'];
    });
  }
  ngOnInit(): void {
    if (!localStorage.getItem('authorization')) {
      this.router.navigateByUrl('/auth/login');
    } else {
      this.getAllNotes();
    }
  }

  
  viewEditNote(noteId) {
    this.router.navigate(['note', 'detail', noteId]);
  }

  deleteNote(noteId) {
    this.notesService.deleteNote(noteId).subscribe((res) => {
      alert('Note Deleted Successfully');
      this.getAllNotes();
    });
  }

  addNewNote() {
    this.router.navigate(['note', 'new']);
  }

  getDataByPage(page) {
    console.log(page);
    this.pageNumber = page;
    this.getAllNotes();
    return page;
  }
}

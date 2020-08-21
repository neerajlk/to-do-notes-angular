import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../http/notes.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-view-edit',
  templateUrl: './notes-view-edit.component.html',
  styleUrls: ['./notes-view-edit.component.scss'],
})
export class NotesViewEditComponent implements OnInit {
  pageTitle: String = 'Add';
  editable: boolean = true;
  noteForm: FormGroup = this.fb.group({
    title: [{ value: '', disabled: !this.editable }],
    description: [{ value: '', disabled: !this.editable }],
  });

  noteID: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NotesService
  ) {
    if(!localStorage.getItem('authorization')){
      this.router.navigateByUrl('/auth/login')
    }
    this.route.params.subscribe((res) => {
      if (res.id) {
        this.noteID = res.id;
        this.pageTitle = 'View / Edit';
      }
    });
  }
  ngOnInit(): void {
    if (this.noteID) {
      this.getNotebyId();
      this.editable = false;
      this.enableDisableFields()
    }
  }

  getNotebyId() {
    this.noteService.getNoteById(this.noteID).subscribe((res) => {
      console.log(res);
      this.noteForm.patchValue({
        title: res['title'],
        description: res['description'],
      });
    });
  }
  addEditNote() {
    if (this.noteID) {
      this.noteService
        .updateNote(this.noteID, this.noteForm.value)
        .subscribe((res) => {
          alert('Note Edited Successfully');
        });
      this.editable = false;
      this.enableDisableFields()
    } else {
      this.noteService.createNote(this.noteForm.value).subscribe((res) => {
        alert('New Note has been Created');
        this.router.navigate(['note', 'list']);
      });
    }
  }

  editNote() {
    this.editable = true;
    this.enableDisableFields()
  }

  enableDisableFields(){
    if(this.editable){
      this.noteForm.controls.description.enable();
      this.noteForm.controls.title.enable();
    }
    else{
      this.noteForm.controls.description.disable();
      this.noteForm.controls.title.disable();
    }
  }
}

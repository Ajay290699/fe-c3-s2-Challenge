import { Component } from '@angular/core';
import { notes } from '../models/notes';
import { note } from '../models/note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  note = notes;

  searchNotes:string = '';

  search(){
    if(this.searchNotes == '' || this.searchNotes == null){
      this.note = notes;
    }else{
      this.note = notes;
      this.note = this.note.filter(note => note.title?.startsWith(this.searchNotes.toLowerCase()))
    }
  }

  reset(){
    this.searchNotes = "";
    this.note = notes;
  }
}

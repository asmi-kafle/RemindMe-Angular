import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() notes: Data;
  inputData: Data = {
    id: null,
    Title: '',
    Content: '',
  };

  deleteDataFunc() {
    console.log('deleteDataFunction from card.ts was called');
    console.log(this.notes);
    this.dataService.deleteNotesData(this.notes.id);
  }

  putDataFunc() {
    console.log('put function from card.ts was called');
    var title = prompt('Enter title:');
    var content = prompt('Enter content');
    this.inputData.id = this.notes.id;
    this.inputData.Title = title;
    this.inputData.Content = content;
    this.dataService.putData(this.inputData);
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}

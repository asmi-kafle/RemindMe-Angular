import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  consoleData;

  @Input() notes: Data;

  deleteDataFunc() {
    this.dataService.deleteData();
    console.log('deleteDataFunction from card.ts was called');
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}

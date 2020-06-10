import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  dataList: Data[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataList = this.dataService.getNotesData();
    console.log(
      'Education has been created with this educationData',
      this.dataList
    );
  }
}

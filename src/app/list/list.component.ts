import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  dataList: Data[] = [];
  inputData: Data = {
    id: null,
    Title: '',
    Content: '',
  };

  constructor(private dataService: DataService) {}

  // HTTP Post request

  postDataFunc() {
    var title = prompt('Please enter your the Title');
    var content = prompt('Please enter Content');
    this.inputData.id = Math.random();
    this.inputData.Title = title;
    this.inputData.Content = content;
    this.dataService.postData(this.inputData);
  }

  ngOnInit(): void {
    // instantiates Service class to call the class's getNotesData method.
    // This get method performs HTTP get request on the database and returns the list of enttities.
    this.dataList = this.dataService.getNotesData();
    console.log(
      'Education has been created with this educationData',
      this.dataList
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() notes: Data;

  ngOnInit(): void {}
}

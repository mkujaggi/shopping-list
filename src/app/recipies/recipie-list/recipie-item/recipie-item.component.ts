import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../../recipie.modal';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe: Recipie;
  @Input() index: number;

  ngOnInit() {
  }
}

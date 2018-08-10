import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {E} from '@angular/core/src/render3';

@Component({
  selector: 'user-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  size: number = 20;
  @Input()
  data: any;
  @Output()
  onCreate: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  create() {

    this.onCreate.emit();
  }

  update() {

    this.onUpdate.emit();
  }
}

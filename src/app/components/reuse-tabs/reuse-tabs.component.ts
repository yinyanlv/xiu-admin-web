import { Component, OnInit } from '@angular/core';

export interface Tab {
  code: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-reuse-tabs',
  templateUrl: './reuse-tabs.component.html',
  styleUrls: ['./reuse-tabs.component.scss']
})
export class ReuseTabsComponent implements OnInit {

  index = 0;
  tabs: Array<Tab> = [{
    code: '1',
    title: '1',
    url: '1'
  }, {
    code: '1',
    title: '1',
    url: '1'
  }, {
    code: '1',
    title: '1',
    url: '1'
  }];

  constructor() { }

  ngOnInit() {
  }

  closeTab(tab: Tab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
}

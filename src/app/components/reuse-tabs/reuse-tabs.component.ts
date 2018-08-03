import { Component, OnInit } from '@angular/core';

export interface Tab {
  code: string;
  name: string;
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
    code: '',
    name: '统计分析',
    url: ''
  }, {
    code: '',
    name: '系统监控',
    url: ''
  }, {
    code: '',
    name: '操作记录',
    url: ''
  }, {
    code: '',
    name: '分类管理',
    url: ''
  }, {
    code: '',
    name: '文章管理',
    url: ''
  }, {
    code: '',
    name: '评论管理',
    url: ''
  }, {
    code: '',
    name: '用户管理',
    url: ''
  }, {
    code: '',
    name: '网站信息',
    url: ''
  }, {
    code: '',
    name: '用户信息',
    url: ''
  }];

  constructor() { }

  ngOnInit() {
  }

  closeTab(tab: Tab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
}

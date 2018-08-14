import {Injectable} from '@angular/core';

@Injectable()
export class MenuDataService {
  data: Array<any> = [{
    code: '',
    icon: 'dashboard',
    title: '统计监控',
    opened: false,
    children: [{
      code: '',
      url: '/analysis',
      title: '统计分析',
      selected: false
    }, {
      code: '',
      url: '/monitor',
      title: '系统监控',
      selected: false
    }, {
      code: '',
      url: '/log',
      title: '操作记录',
      selected: false
    }]
  }, {
    code: '',
    icon: 'table',
    title: '功能模块',
    opened: false,
    children: [{
      code: '',
      url: '/category',
      title: '分类管理',
      selected: false
    }, {
      code: '',
      url: '/article',
      title: '文章管理',
      selected: false
    }, {
      code: '',
      url: '/comment',
      title: '评论管理',
      selected: false
    }, {
      code: '',
      url: '/user',
      title: '用户管理',
      selected: false
    }]
  }, {
    code: '',
    icon: 'profile',
    title: '系统设置',
    opened: false,
    children: [{
      code: '',
      url: '/site-info',
      title: '网站信息',
      selected: false
    }, {
      code: '',
      url: '/user-info',
      title: '用户信息',
      selected: false
    }]
  }];
}

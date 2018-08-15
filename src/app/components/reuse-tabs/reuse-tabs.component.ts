import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

import {AppRouteReuseStrategy} from '../../common/app-route-reuse-strategy';
import {MenuDataService} from '../../services/menu-data.service';
import {NzMessageService} from 'ng-zorro-antd';

export interface Tab {
  code?: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-reuse-tabs',
  templateUrl: './reuse-tabs.component.html',
  styleUrls: ['./reuse-tabs.component.scss']
})
export class ReuseTabsComponent implements OnInit {

  activeIndex = 0;
  tabs: Array<Tab> = [];
  menu: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: NzMessageService,
    private menuDataService: MenuDataService
  ) {
    this.menu = this.menuDataService.data;
  }

  ngOnInit() {

    const url = this.activatedRoute.snapshot['_routerState'].url;

    this.tabs.push(this.getTabData(url));

    this.router.events
      .pipe(filter((event) => {
        return event instanceof NavigationEnd;
      }))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        return route.snapshot['_routerState'].url;
      }))
      .subscribe((url: string) => {
        const index = this.tabs.findIndex((item) => {
          return item.url === url;
        });

        if (index !== -1) {
          this.activeIndex = index;
        } else {
          this.tabs.push(this.getTabData(url));
          this.activeIndex++;
        }
      });
  }

  getTabData(url: string) {
    let data = {};

    this.menu.forEach((subMenu: any) => {

      subMenu.children.forEach((item) => {
        if (item.url === url) {
          data = item;
        }
      });
    });

    return <Tab>data;
  }

  closeTab(tab: Tab): void {

    if (this.tabs.length <= 1) {
      this.messageService.error('至少要保留一个标签页');
      return;
    }

    const activeIndex = this.tabs.indexOf(tab);
    const nextActiveIndex = activeIndex === 0 ? activeIndex + 1 : activeIndex - 1;
    const nextActiveTab = this.tabs[nextActiveIndex];

    this.tabs.splice(activeIndex, 1);

    this.activeIndex = this.tabs.findIndex((item) => {
      return item === nextActiveTab;
    });

    this.router.navigate([nextActiveTab.url]);

    setTimeout(() => {
      delete AppRouteReuseStrategy.handles[tab.url.replace(/\//g, '_')];
    });
  }

  activateTab(index: number) {

    this.router.navigate([this.tabs[index].url]);
  }
}

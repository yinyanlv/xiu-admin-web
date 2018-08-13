import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

import {AppRouteReuseStrategy} from '../../common/app-route-reuse-strategy';

export interface Tab {
  code: string;
  title: string;
  url?: string;
}

@Component({
  selector: 'app-reuse-tabs',
  templateUrl: './reuse-tabs.component.html',
  styleUrls: ['./reuse-tabs.component.scss']
})
export class ReuseTabsComponent implements OnInit {

  activeIndex = 0;
  tabs: Array<Tab> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.router.events
      .pipe(filter((event) => {
        return event instanceof NavigationEnd;
      }))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while(route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter((route) => {
        return route.outlet === 'primary';
      }))
      .pipe(mergeMap((route) => {
        return route.data;
      }))
      .subscribe((data: Tab) => {
        const index = this.tabs.findIndex((item) => {
          return item.code === data.code;
        });

        if (index !== -1) {
          this.activeIndex = index;
        } else {
          this.tabs.push(data);
        }
      });
  }

  closeTab(tab: Tab): void {

    if (this.tabs.length <= 1) {
      return;
    }

    const activeIndex = this.tabs.indexOf(tab);
    const nextActiveIndex = activeIndex === 0 ? activeIndex + 1 : activeIndex - 1;
    const nextActiveTab = this.tabs[nextActiveIndex];

    this.tabs.splice(activeIndex, 1);

    delete AppRouteReuseStrategy.handles['_' + tab.code];

    this.activeIndex = this.tabs.findIndex((item) => {
      return item === nextActiveTab;
    });

    this.router.navigate(['/' + nextActiveTab.code]);
  }

  activateTab(tab: Tab) {

    this.activeIndex = this.tabs.findIndex((item) => {
      return item === tab;
    });

    this.router.navigate(['/' + tab.code]);
  }
}

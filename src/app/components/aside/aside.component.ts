import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MenuDataService} from '../../services/menu-data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  menu: Array<any>;

  isCollapsed: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private menuDataService: MenuDataService
  ) {
    this.menu = menuDataService.data;
  }

  ngOnInit() {

    const url = this.activatedRoute.snapshot['_routerState'].url;

    this.selectMenuItem(url, true);

    this.router.events
      .pipe(filter((event) => {
        return event instanceof NavigationEnd;
      }))
      .subscribe((event) => {
        this.selectMenuItem(event['url'], false);
      });
  }

  selectMenuItem(url: string, isControlOpen: boolean) {
    this.menu.forEach((subMenu: any) => {
      let isActive = false;

      subMenu.children.forEach((item) => {
        if (item.url === url) {
          item.selected = true;
          isActive = true;
        } else {
          item.selected = false;
        }
      });

      if (isControlOpen) {
        subMenu.opened = isActive;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subs: Subscription;

  constructor(private uiService: UiService,private router:Router) {
    this.subs = this.uiService.getToggle().subscribe((value) => this.showAddTask = value)
  }
  ngOnInit(): void { }

  toggleShowTask() {
    this.uiService.toggleShow();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}

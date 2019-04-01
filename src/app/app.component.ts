import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingPract';
  constructor(private router: Router) { }

  gotoHome(routeName: string) {
    this.router.navigateByUrl(routeName)
  }

  gotoClient(routeName: string) {
    this.router.navigateByUrl(routeName)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: `

  <div class="wrapper">

    <div class="sidebar" data-background-color="white" data-active-color="danger">
        <sidebar-cmp></sidebar-cmp>
    </div>

    <div class="main-panel">
        <navbar-cmp></navbar-cmp>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
        <footer-cmp></footer-cmp>
    </div>
  </div>

  `,
  styles: []
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

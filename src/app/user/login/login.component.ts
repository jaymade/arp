import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {name: 'Jay' , auth: true};
  constructor() { }

  ngOnInit() {
  }
  onClick () {
    this.user.auth = this.user.auth ? false : true;
  }
}

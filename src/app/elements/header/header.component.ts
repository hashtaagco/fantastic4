import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logout();
  }

}

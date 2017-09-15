import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  user='';
  constructor(userService:UserService) 
  { 
    this.user=userService.userName;
  }

  ngOnInit() {
  }

}

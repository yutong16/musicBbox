import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contactForm = {};

  constructor() { }

  ngOnInit() {
  }
  onChange(event:any) {
    alert(event.target.value);
  }

}

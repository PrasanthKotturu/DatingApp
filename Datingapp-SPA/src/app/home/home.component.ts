import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rigisterMode = false; 
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  rigisterToggle() {
    this.rigisterMode = true;
  }
  cancelRegisterMode(registerMode: boolean) {
    this.rigisterMode = registerMode;
  }
}

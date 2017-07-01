import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  //Variables
  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.showMenu = true;

    /*
    Se necesita una variable global que permita transformar el 
    */ 
}

}

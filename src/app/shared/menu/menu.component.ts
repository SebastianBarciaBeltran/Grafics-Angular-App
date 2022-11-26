import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu.interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { route: '/grafics/bar', text: 'Barras'},
    { route: '/grafics/doble-bars', text: 'Barras dobles'},
    { route: '/grafics/donut', text: 'Dona'},
    { route: '/grafics/donut-http', text: 'Dona Http'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

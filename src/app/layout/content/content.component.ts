import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  chosenTab: any;
  navMenu = [
    { title: 'About', active: true },
    { title: 'Resume', active: false },
    { title: 'Portfolio', active: false },
    { title: 'Blog', active: false },
    { title: 'Contact', active: false },
  ];
  ngOnInit() {
    this.chosenTab = this.navMenu.find((x) => x.active);
  }

  onChangeTab(item: any) {
    this.navMenu.map((x) => {
      x.active = false;
      return x;
    });

    item.active = true;
    this.chosenTab = item;
  }
}

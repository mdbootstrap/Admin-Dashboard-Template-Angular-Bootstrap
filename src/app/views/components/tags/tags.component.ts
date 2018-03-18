import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  hideElement = true;
  predefined: object[] = [
    { text: 'Jane Doe', img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg', visible: true },
    { text: 'Anna Black', img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg', visible: true },
    { text: 'Tag 1', visible: true, closable: true },
    { text: 'Tag 2', visible: true, closable: true },
    { text: 'Tag 3', visible: true, closable: true },
  ];
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 3'];
  constructor() { }

  ngOnInit() {
  }

}

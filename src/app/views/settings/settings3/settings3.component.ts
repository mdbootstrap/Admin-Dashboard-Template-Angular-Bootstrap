import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-settings3',
  templateUrl: './settings3.component.html',
  styleUrls: ['./settings3.component.scss']
})
export class Settings3Component implements OnInit {

  visible = false;
  constructor() {}

  ngOnInit() {}


  showLoader(event: any) {
    if (event.target.nativeElement.children[0].children[0].classList.contains('check')) {
      this.visible = true;
      window.setTimeout(() => {
        this.visible = false;
      }, 2000);
    }
  }
}
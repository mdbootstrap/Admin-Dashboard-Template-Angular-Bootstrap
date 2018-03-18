import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() type= '';
  @Input() side = '';
  @Input() size = '';

  constructor() { }

  ngOnInit() {
  }
  getClass = function() {
    const type = this.type;
    const size = this.size;
    const side = this.side;
 
    if (type === 'central') {
      if (size === 'small') {
        return 'modal-sm';
      } else if (size === 'large') {
        return 'modal-lg';
      } else if (size === 'fluid') {
        return 'modal-fluid';
      } else {
        return '';
      }
    } else if (type === 'side') {
        if (side === 'top-left') {
          return 'modal-side modal-top-left';
        } else if (side === 'bottom-left') {
          return 'modal-side modal-bottom-left';
        } else if (side === 'bottom-right') {
          return 'modal-side modal-bottom-right';
        } else {
          return 'modal-side modal-top-right';
        }
    } else if (type === 'fluid') {
        if (side === 'right') {
          return 'modal-full-height modal-right';
        } else if (side === 'left') {
          return 'modal-full-height modal-left';
        } else if (side === 'bottom') {
          return 'modal-full-height modal-bottom';
        } else {
          return 'modal-full-height modal-top';
        }
    } else if (type === 'frame') {
        if (side === 'bottom') {
          return 'modal-frame modal-bottom';
        } else {
        return 'modal-frame modal-top';
        }
      } else {
          return '';
      }
    };
  };

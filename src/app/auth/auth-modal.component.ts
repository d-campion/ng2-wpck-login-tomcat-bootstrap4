import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'auth-modal',
  templateUrl: "./auth-modal.component.html"
})
export class AuthModalComponent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}
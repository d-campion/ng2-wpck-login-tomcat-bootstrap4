import {Component, Input} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthModalComponent } from './auth-modal.component';


@Component({
  templateUrl: "./auth.component.html",
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public message: string;

  public username: string;
  public password: string;
  public server: string;

  private modalRef: any;



  constructor(private authService: AuthService, public router: Router, private modalService: NgbModal) {
    this.setMessage();

    // Get the redirect URL from our auth service
    // If no redirect has been set, use the default
    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';

    // Redirect the user
    this.router.navigate([redirect]);
  }


  public setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  public login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.username, this.password, this.server)
    .subscribe(
                        valid => {
                          this.setMessage();

                          this.authService.isLoggedIn = valid;
                          // Get the redirect URL from our auth service
                          // If no redirect has been set, use the default
                          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
                          // Redirect the user
                          this.router.navigate([redirect]);
                        }, error => { 
                          this.open();
                          this.modalRef.componentInstance.error = error;
                          console.debug("test");
                        }
    );


  }
  public logout() {
    this.authService.logout();
    this.setMessage();
  }

  public open() {
    this.modalRef = this.modalService.open( AuthModalComponent );
  }
}

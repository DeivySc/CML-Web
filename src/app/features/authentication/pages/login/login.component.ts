import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthenticationService} from '../../core/http/Authentication.service'
import {IAuthenticationRequest} from '../../models/request/authentication-request.interface'
import {IAuthenticationResponse} from '../../models/response/authentication-response.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value = 'Clear me';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit()  {
  }

  public LoginHB(){
    const req: IAuthenticationRequest= {};


  this.authenticationService.getLoginHB(req,'/GeTypeIdentityDocument').subscribe((res: IAuthenticationResponse[]) => {
    console.log(res);
  });

  }
}

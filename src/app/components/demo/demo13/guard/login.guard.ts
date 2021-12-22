import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import { FakeLogin13Service } from '../services/fake-login13.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild, CanDeactivate<boolean> {

  constructor(private fakeLogin : FakeLogin13Service){ }

  canActivate(): boolean
  {
    
    return this.fakeLogin.isConnect;
  }


  canActivateChild() : boolean
  {
    return this.fakeLogin.isConnect;
  }

  canDeactivate() : boolean
  {
    return this.fakeLogin.isConnect;
  }
  
}

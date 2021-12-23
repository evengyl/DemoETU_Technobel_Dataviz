import { Component, OnInit } from '@angular/core';
import { Address } from './models/address.model';
import { login } from './models/login.interface';
import { User } from './models/user.model';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html'
})
export class Demo14Component implements OnInit, login {

  user : User = new User

  constructor() {
    this.user.name = "Baudoux"
    this.user.surname = "Loic"
    this.user.age = 30
    this.user.techFav = ["Angular", "Node", "Express", "tututu"]
    this.user.address = new Address
    this.user.address.locality = "Labuissière"
    this.user.address.number = "12"
    this.user.address.pays = "Belgique"
    this.user.address.street = "Rue jean jaurès"
    this.user.address.zipCode = "6567"
  }
 
  isLogged: boolean;
  login(loginName: string): void {
    throw new Error('Method not implemented.');
  }
  logout(loginName: string): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

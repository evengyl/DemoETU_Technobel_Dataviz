import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html'
})
export class Demo9Component implements OnInit {

  person = {
    name : "Jean charles edouard",
    country : "UK",
    lang : "Swedish meal time"
  }

  persons : any[] = [
    { name : "Jean charles edouard", country : "UK", lang : "Swedish meal time" },
    { name : "Jean charles edouard", country : "USA", lang : "Swedish meal time" },
    { name : "Jean charles edouard", country : "BE", lang : "Swedish meal time" },
    { name : "Jean charles edouard", country : "USA", lang : "Swedish meal time" },
  ]

  classP : string = "alert alert-primary"


  constructor() { }

  ngOnInit(): void {
  }

  getColor(country) : string
  {
    switch(country)
    {
      case 'UK' :
        return 'green'
      case 'USA' :
        return 'blue'
      case 'BE' :
        return 'red'
    }
  }

  getClass(country) : string
  {
    switch(country)
    {
      case 'UK' :
        return "alert alert-warning"
      case 'USA' : 
        return "alert alert-danger"
      case 'BE' : 
        return "alert alert-success"
    }
  }

}

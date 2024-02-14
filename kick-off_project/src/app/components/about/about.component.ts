import { Component, OnInit } from '@angular/core';
import { StateServiceService } from 'src/app/shared/services/state-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

public userImg:string = "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972138872283.png"
public text:string = "Responsive layouts in Material Design adapt to any possible screen size. Google's specifications provide guidance that includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens."


  constructor(
    private stateService:StateServiceService 
  ) {}

  public userData:any = this.stateService.userData
  public date!:string

  getDate(){
    this.date = `${this.userData.birthDate.getFullYear()}.${this.userData.birthDate.getMonth()}.${this.userData.birthDate.getDate()}`;

  }

  ngOnInit(): void {
    this.stateService.getUser()
    if(this.userData){
      this.getDate()
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activated = false;
  user2Activated = false;

  //in order to use service, it must be injected
  constructor(private usersService: UsersService) {}
 
  ngOnInit() {
    //observer and observable at the same time
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }
}
